

const page = () => {
  return (
    <section className="min-h-screen bg-background flex justify-center mx-auto container ">
      <div className="flex gap-16 items-center">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-primary font-bold text-2xl">Welcome</h2>
            <p className="text-blue">Login to your account</p>

          </div>
          <button className="button">New here? Setup your practice</button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            {/* key */}
            <div className="flex items-center justify-center p-1 bg-[#DFE8FC]">
              a
            </div>
            <p className="text-primary font-700 text-1xl">
              Login
            </p>
          </div>
          <hr className="h-1 bg-[#E6E8EC] w-full" />

          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-tertiary">Email address</label>
              <input type="email" name="" id="email" className=" rounded-[5px] " />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password" className="text-tertiary">Password</label>
              <input type="password" name="" id="password" className=" rounded-[5px] " />
            </div>

          </form>

        </div>
      </div>
    </section>
  )
}

export default page