import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "~/components/InputField";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

const PetitionContent = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: null,
      anonymous: true,
      phoneNumber: null,
      comments: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      // sign up logic here
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className={
        "bg-white px-6 md:px-25 flex flex-row justify-center gap-8 pb-10 text-gray-600 py-8"
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col w-full max-w-[800px] justify-center items-center space-y-5"}
      >
        <div className={"flex flex-row gap-8 w-full"}>
          <InputField
            name={"firstName"}
            label={"First Name"}
            placeholder={"John"}
            register={register}
            type={"text"}
            error={errors.firstName}
            validation={{ required: "First Name is required", minLength: 2 }}
          />
          <InputField
            name={"lastName"}
            label={"Last Name"}
            placeholder={"Doe"}
            type={"text"}
            register={register}
            error={errors.lastName}
            validation={{ required: "Last Name is required", minLength: 2 }}
          />
        </div>

        <div className={"flex flex-row gap-8 w-full"}>
          <InputField
            name={"email"}
            label={"Email"}
            placeholder={"Enter your email"}
            type={"text"}
            register={register}
            error={errors.email}
            validation={{
              required: "Email Address is required",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address.",
            }}
          />

          <InputField
            name={"phoneNumber"}
            label={"Phone Number"}
            placeholder={"(123) 456-7890"}
            type={"text"}
            register={register}
            error={errors.phoneNumber}
            validation={{
              required: "Phone Number is required",
              pattern: /\d{10}$/,
              message: "Invalid phone number.",
            }}
          />
        </div>

        <div className={"w-full"}>
          <Controller
            name="anonymous"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value ? "true" : "false"}
                onValueChange={(val) => field.onChange(val === "true")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="acknowledged" />
                  <Label htmlFor="acknowledged">Public</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="anonymous" />
                  <Label htmlFor="anonymous">Anonymous</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <InputField
          name={"comments"}
          label={"Comments"}
          placeholder={"Any comments..."}
          type={"textarea"}
          register={register}
          error={errors.comments}
          validation={{ maxLength: 500 }}
        />

        <Button
          type={"submit"}
          disabled={isSubmitting}
          className={"w-full max-w-[400px] p-6 text-lg font-semibold"}
        >
          {isSubmitting ? "Submitting..." : "Sign Petition"}
        </Button>
      </form>
    </section>
  );
};

export default PetitionContent;