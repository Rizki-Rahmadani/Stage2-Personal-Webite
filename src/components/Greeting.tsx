import React, { useEffect, useState } from "react";

// DMendefinisikan tipe untuk objek Profile, yang memiliki satu properti 'name' dengan tipe string.
type Profile = {
  name: string;
};

const Greeting: React.FC<Profile> = ({ name }) => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    // Membuat interval untuk mengupdate waktu saat ini setiap detik
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    // Menghapus interval ketika komponen tidak digunakan lagi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-row justify-center  py-10 px-4 ">
      <div className="w-4/5 flex flex-row bg-sky-200/50 rounded-r-lg shadow-lg">
        <div className="w-3/5 px-10 space-y-5 text-justify">
          <h1 className="text-center text-2xl font-bold">
            Welcome to {name}'s Personal Website
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa
            saepe sit dolore aliquid deleniti nobis beatae, ducimus amet non
            molestiae porro nisi? Excepturi perferendis eveniet reprehenderit,
            magni placeat repudiandae eaque quam sed rerum enim asperiores
            fugit. Exercitationem sapiente iure reprehenderit ut cupiditate
            error dicta pariatur beatae porro laudantium, corrupti, quis minus
            necessitatibus, aperiam sequi aut eius unde neque possimus!
            Repudiandae, hic, doloribus expedita, cum minus quibusdam
            voluptatibus repellendus beatae maxime tenetur harum iusto ea!
            Similique vitae, beatae esse possimus enim repellat dolores
            quibusdam minus facilis accusantium saepe reprehenderit iusto, sit
            labore fuga illo. Quisquam voluptas nostrum sequi explicabo harum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium voluptatem quidem a provident expedita molestias
            voluptates quo porro veritatis ipsum. Quisquam, doloribus! Illo
            inventore harum qui sed repellendus, reprehenderit quos nostrum aut
            neque in. Ducimus placeat quaerat reprehenderit, eos error
            temporibus iusto odit dolorum repudiandae, velit assumenda
            molestias! Ipsam, labore.
          </p>
          <p>Current Time: {currentTime}</p>
        </div>
        <div className="w-2/5 flex justify-center items-center p-10 ">
          <div className="w-1/2 flex flex-col justify-center items-center bg-white rounded p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-52"
            />
            <br />
            <p className="text-center text-2xl font-bold">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
