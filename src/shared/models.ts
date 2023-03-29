import z from "zod";

export const RegisterInputSchema = z.object({
  email: z
    .string()
    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email is Invalid"),
  name: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Last name is required"),
  password: z
    .string()
    .regex(/[0-9]+/i, "Password must contain at least one digit")
    .regex(/[A-Za-z]+/i, "Password must contain at least one letter")
    .min(5, "Your password must be at least 5 characters"),
});

export const RegisterEmailSchema = z
  .string()
  .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email is Invalid");
export const RegisterNameSchema = z.string().min(1, "Name is required");
export const RegisterLastNameSchema = z
  .string()
  .min(1, "Last name is required");
export const RegisterPasswordSchema = z
  .string()
  .regex(/[0-9]+/i, "Password must contain at least one digit")
  .regex(/[A-Za-z]+/i, "Password must contain at least one letter")
  .min(5, "Your password must be at least 5 characters");

export const SlideSchema = z.object({
  _createdAt: z.string(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.string(),
  _updatedAt: z.string(),
  background: z.object({
    _type: z.string(),
    asset: z.object({ _ref: z.string(), _type: z.string() }),
  }),
  links: z.array(
    z.object({ _key: z.string(), _type: z.string(), name: z.string() })
  ),
  logo: z.object({
    _type: z.string(),
    asset: z.object({ _ref: z.string(), _type: z.string() }),
  }),
  name: z.string(),
  navColor: z.string(),
});
