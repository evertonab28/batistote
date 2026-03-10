import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Validate input before sending using the shared Zod schema
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          const error = api.contact.create.responses[400].parse(errorData);
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to send message");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
