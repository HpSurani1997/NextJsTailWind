'use client';

import { useFormik } from 'formik';

import AuthLayout from '@/shared/AuthLayout';
import Button from '@/shared/Button';
import Input from '@/shared/Input';
import Text from '@/shared/Text';

export default function Registration() {
  const validate = (values: { code: string }) => {
    const errors: { code?: string } = {};

    if (!values.code) {
      errors.code = 'Code is Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <AuthLayout>
      <div className="flex flex-1 flex-col justify-center items-center bg-[#f9fbfc] h-[100vh]">
        <Text variant="h2" color="text-[#004EA8]" weight="semibold">
          Register
        </Text>
        <Text
          variant="body"
          color="text-[#6C8093]"
          className="mt-3"
          weight="normal"
          align="center"
        >
          Please enter the registration code
          <br />
          you received from your sponsor
        </Text>
        <Input
          className="w-[80%] sm:w-[60%] ml-[10%] sm:ml-[20%] mt-6"
          placeholder="Code"
          id="code"
          name="code"
          type="code"
          onChange={formik.handleChange}
          value={formik.values.code}
        />
        {formik.errors.code && (
          <Text color="text-[red]">{formik.errors.code}</Text>
        )}
        <Button
          onClick={() => formik.submitForm()}
          className="mt-6 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]"
        >
          Continue
        </Button>
        <div className="mt-6 flex flex-row justify-center items-center">
          <Text
            variant="body"
            color="text-[#6C8093]"
            weight="normal"
            align="center"
          >
            Any problems?
          </Text>
          <Text
            variant="body"
            color="text-[#014594]"
            className="underline ml-2"
            weight="normal"
            align="center"
          >
            Contact support
          </Text>
        </div>
      </div>
    </AuthLayout>
  );
}
