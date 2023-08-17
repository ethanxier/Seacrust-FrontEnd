import logoSeacrust from '/src/assets/logo/logo-1.1.svg';

const NavBarAdmin = () => {
  return (
    <div className="flex py-2 sm:py-0 px-3 sm:px-14 justify-center items-center gap-8 sm:gap-12 md:gap-44 self-stretch bg-white shadow-md fixed w-full z-50">

      <div className="flex items-center">
        <div className='w-24 md:w-56 items-start'>
          <img src={logoSeacrust} alt="Logo Seacrust " />
        </div>
      </div>

      <div className='w-full text-xl sm:text-3xl font-bold text-palleteBlue text-right'>ADMIN</div>
    </div>
  );
};

export default NavBarAdmin;
