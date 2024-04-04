/* eslint-disable react/no-unescaped-entities */
const About = ({ day }) => {
  return (
    <>
      <div
        className={`text-md relative top-0 mt-20 p-4 text-center font-custom text-3xl ${
          day ? "text-black" : "text-white"
        }`}
      >
        Hi, my name is <b>Gil</b> <br /> I'm a Software Developer from Portugal
      </div>
      <div className={`relative px-4  ${day ? "text-black" : "text-white"}`}>
        <div
          className="text-md mt-16 scroll-mt-16 p-4 font-custom text-4xl font-black underline"
          id="about"
        >
          About
        </div>
        <div className="text-md p-4 font-custom text-3xl">
          I'm a software developer, my focus is on crafting sophisticated
          solutions for intricate challenges. Drawing from a diverse background
          encompassing app development and the hard sciences, I am committed to
          utilizing my versatile skill set to make impactful contributions to
          projects and collaborate effectively within teams.
        </div>
      </div>
    </>
  );
};

export default About;
