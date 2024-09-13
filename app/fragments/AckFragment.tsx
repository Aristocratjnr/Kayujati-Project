// Acknowledgement
export default function AckFragment() {
  const user_deals = [
    {
      name: "Contact Support",
      href: "/#support"
    },
    {
      name: "Privacy Policy",
      href: "/#privacy"
    },
    {
      name: "Terms & Conditions",
      href: "/#ts_and_cs"
    },
  ]

  return (
    <div className='absolute bottom-8 w-[30vw]'>
      <ul className='flex justify-between items-center'>
        {
          user_deals.map((term, index) => (
            <li className='text-muted-foreground text-sm cursor-pointer hover:underline' key={index}>{term?.name}</li>
          ))
        }
      </ul>
    </div>
  )
}