const Footer = () => {
  return (
    <div className="w-full mt-auto">
      <div className="container mx-auto p-5 border-t-2 border-black">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <div className="flex items-center">
            <span className="font-extrabold text-3xl text-green-500">KU</span>
            <span className="text-xl ml-2">Complaint</span>
          </div>
          <div className="text-center">
            Website created by{" "}
            <a
              href="https://github.com/qu1etboy"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Qu1etboy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
