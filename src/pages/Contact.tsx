import { Line } from "@components"
import ContactForm from "@components/ContactForm"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="inline-flex w-full p-8">
      <div className="w-1/3 min-h-full p-8">
        <div className="overflow-hidden rounded-md flex h-full shine">
          <img
            src="src/assets/img/screens/Screenshot_431.png"
            className="w-full h-full object-cover bg-stone-200"
          />
        </div>
      </div>
      <div className="grow h-full px-4 py-8">
        <p className="font-medium text-2xl ">{t("contact_me")}</p>
        <p className="text-stone-600">{t("contact_sub")}</p>
        <Line className="my-6" />
        <ContactForm />
      </div>
    </div>
  )
}
export default Contact
