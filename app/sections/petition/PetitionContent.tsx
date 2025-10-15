import React from "react";
import { useForm } from "react-hook-form";
import InputField from "~/components/InputField";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

const PetitionContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: null,
      anonymous: false,
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
        "bg-white px-6 md:px-25 flex flex-row gap-8 pb-10 text-gray-600 py-8"
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col w-full justify-center items-center space-y-5"}
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
              pattern: /^\(\d{3}\) \d{3}-\d{4}$/,
              message: "Invalid phone number format. Use (123) 456-7890.",
            }}
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

        <div className={"w-fit flex flex-row gap-5 items-center"}>
          <RadioGroup defaultValue="anonymous">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="anonymous" id="r1" />
              <Label htmlFor="r1">Anonymous</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="public" id="r2" />
              <Label htmlFor="r2">Public</Label>
            </div>
          </RadioGroup>

          <Button
            type={"submit"}
            disabled={isSubmitting}
            // className={"yellow-btn w-full mt-5"}
          >
            {isSubmitting ? "Submitting..." : "Sign Petition"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PetitionContent;