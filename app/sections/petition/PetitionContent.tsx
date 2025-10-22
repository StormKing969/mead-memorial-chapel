import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "~/components/InputField";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "~/lib/firebase";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PetitionContent = () => {
  const navigate = useNavigate();
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
      getNewsLetter: false,
      phoneNumber: null,
      comments: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US");

    try {
      await addDoc(collection(db, "petitions"), {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        anonymous: data.anonymous,
        getNewsLetter: data.getNewsLetter,
        phoneNumber: data.phoneNumber,
        comments: data.comments,
        signedAt: formattedDate,
      });
    } catch (error) {
      console.error(error);
    }

    emailjs.init(publicKey);

    const titleContent = data.getNewsLetter
      ? "Signed Up for the Petition & Newsletters"
      : "Signed Up for the Petition Only";
    const nameContent = data.firstName + " " + data.lastName;

    try {
      await emailjs
        .send(serviceId, templateId, {
          title: titleContent,
          name: nameContent,
          message: data.comments,
          email: data.email,
          time: formattedDate,
        })
        .finally(() => {
          navigate("/main");
        });
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
        className={
          "flex flex-col w-full max-w-[800px] justify-center items-center space-y-5"
        }
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

        <hr className={"w-full border-t border-gray-300"} />

        <div className={"w-full"}>
          <Controller
            name="getNewsLetter"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value ? "true" : "false"}
                onValueChange={(val) => field.onChange(val === "true")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="get-news-letters" />
                  <Label htmlFor="get-news-letters">
                    Yes, I would like to receive newsletters from Mead Memorial
                    Chapel
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="dont-want" />
                  <Label htmlFor="dont-want">No, Thanks</Label>
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