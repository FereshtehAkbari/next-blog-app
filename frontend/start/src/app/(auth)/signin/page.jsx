"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import RHFTextField from "@/ui/RHFTextField";
import Button from "@/ui/Button";
import { useAuth } from "@/context/AuthContext";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-[var(--color-secodary-500)] text-center mb-6">
        ورود به حساب کاربری
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="ایمیل را وارد کنید."
          name="email"
          register={register}
          required
          dir="ltr"
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          required
          dir="ltr"
        />
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      </form>
    </div>
  );
}

export default Signin;
