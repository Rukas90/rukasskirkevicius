import { ButtonSubmit, InputField, TextArea } from "@components"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

interface ContactFormProps {
  onSuccess?: () => void
  onError?: (error: string) => void
}
const ContactForm = ({ onSuccess, onError }: ContactFormProps) => {
  const { t } = useTranslation()

  const captchaRef = useRef<HCaptcha>(null)

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const token = captchaRef.current?.getResponse()
    if (!token) {
      console.error("Please complete the captcha")
      return
    }
    const form = new FormData(e.target)
    form.append("access_key", "89db6cba-63c3-4514-901c-703de1b40650")

    const data = Object.fromEntries(form)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
    const res = await response.json()

    if (res.success) {
      onSuccess?.()
    } else {
      onError?.(res.message ?? res.error)
    }
    e.target.reset()
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <InputField
        id="full-name"
        name="full-name"
        label={t("full_name")}
        placeholder={t("enter_your_name")}
        required
      />
      <InputField
        id="email"
        name="email"
        label={t("email")}
        placeholder={t("enter_your_email")}
        required
        type="email"
      />
      <TextArea
        id="message"
        name="message"
        label={t("message")}
        placeholder={t("enter_your_message")}
        className="min-h-20 h-26 max-h-64"
        required
      />
      <div className="flex justify-between">
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          size="normal"
          reCaptchaCompat={false}
          ref={captchaRef}
        />
        <ButtonSubmit type="submit" className="ml-auto mb-auto">
          {t("send")}
        </ButtonSubmit>
      </div>
    </form>
  )
}
export default ContactForm
