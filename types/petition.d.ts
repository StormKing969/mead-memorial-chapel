type FormInputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister;
  error?: FieldError;
  validation?: RegisterOptions;
  disabled?: boolean;
  value?: string;
};

type SignUpFormData = {
    firstName: string;
    lastName: string;
    email: string | null;
    anonymous: boolean;
    getNewsLetter: boolean;
    phoneNumber: number | null;
    comments: string;
};