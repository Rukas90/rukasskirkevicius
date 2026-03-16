const Trademark = () => {
  const currentYear = new Date().getFullYear()
  return (
    <p className="text-sm text-stone-500">© {currentYear} Rukas Skirkevicius</p>
  )
}
export default Trademark
