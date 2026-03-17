"use client";

import { useState } from "react";
import { getSiteContent, type RequestFormContent } from "@/lib/site";

type FormValues = {
  name: string;
  email: string;
  platform: string;
  year: string;
  urgency: string;
  partDescription: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  platform: "",
  year: "",
  urgency: "",
  partDescription: "",
};

type RequestFormProps = {
  content?: RequestFormContent;
};

export function RequestForm({ content = getSiteContent("en").requestForm }: RequestFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = <Key extends keyof FormValues>(field: Key, value: FormValues[Key]) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) {
      nextErrors.name = content.validation.name;
    }

    if (!values.email.trim()) {
      nextErrors.email = content.validation.email;
    }

    if (!values.platform.trim()) {
      nextErrors.platform = content.validation.platform;
    }

    if (!values.partDescription.trim()) {
      nextErrors.partDescription = content.validation.partDescription;
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={content.labels.name}
          name="name"
          value={values.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
        />
        <Field
          label={content.labels.email}
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label={content.labels.platform}
          name="platform"
          value={values.platform}
          error={errors.platform}
          options={content.options.platforms}
          placeholder={content.selectPlaceholder}
          onChange={(value) => updateField("platform", value)}
        />
        <Field
          label={content.labels.year}
          name="year"
          value={values.year}
          error={errors.year}
          onChange={(value) => updateField("year", value)}
        />
      </div>

      <SelectField
        label={content.labels.urgency}
        name="urgency"
        value={values.urgency}
        error={errors.urgency}
        options={content.options.urgency}
        placeholder={content.selectPlaceholder}
        onChange={(value) => updateField("urgency", value)}
      />

      <TextAreaField
        label={content.labels.partDescription}
        name="partDescription"
        value={values.partDescription}
        error={errors.partDescription}
        onChange={(value) => updateField("partDescription", value)}
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-7 text-muted">
          {content.helperText}
        </p>
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110"
        >
          {content.submitLabel}
        </button>
      </div>

      {submitted ? (
        <p className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground">
          {content.successMessage}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function Field({ label, name, value, error, type = "text", onChange }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm text-foreground">
      <span className="uppercase tracking-[0.18em] text-muted">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-2xl border border-border bg-black/20 px-4 text-base text-foreground placeholder:text-muted/60"
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <span id={`${name}-error`} className="text-sm text-[#f2b7a5]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

type SelectFieldProps = FieldProps & {
  options: readonly string[];
  placeholder: string;
};

function SelectField({
  label,
  name,
  value,
  error,
  options,
  placeholder,
  onChange,
}: SelectFieldProps) {
  return (
    <label className="grid gap-2 text-sm text-foreground">
      <span className="uppercase tracking-[0.18em] text-muted">{label}</span>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-2xl border border-border bg-black/20 px-4 text-base text-foreground"
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <span id={`${name}-error`} className="text-sm text-[#f2b7a5]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

type TextAreaFieldProps = Omit<FieldProps, "type">;

function TextAreaField({ label, name, value, error, onChange }: TextAreaFieldProps) {
  return (
    <label className="grid gap-2 text-sm text-foreground">
      <span className="uppercase tracking-[0.18em] text-muted">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={6}
        className="rounded-[1.5rem] border border-border bg-black/20 px-4 py-3 text-base text-foreground placeholder:text-muted/60"
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <span id={`${name}-error`} className="text-sm text-[#f2b7a5]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
