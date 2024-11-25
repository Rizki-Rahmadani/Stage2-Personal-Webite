type Years = {
  year: number;
};

const Footer: React.FC<Years> = ({ year }) => {
  return (
    <footer className="w-full bg-sky-900 py-4 px-4 absolute bottom-0">
      <p className="text-center text-white">
        Copyright &copy; {year} Rizki Rahmadani. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
