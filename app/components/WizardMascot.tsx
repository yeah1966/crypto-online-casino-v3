import Image from "next/image";

const mascotSteps = [
  {
    text: "What kind of bonus are you looking for? I can help you find the most magical one!",
    pose: "wave"
  },
  {
    text: "Which crypto would you like to play with? My wizardry covers them all!",
    pose: "point"
  },
  {
    text: "Do you want a casino without KYC? I know the secret passages!",
    pose: "wink"
  },
  {
    text: "Here are your enchanted casino matches! May fortune be with you!",
    pose: "celebrate"
  }
];

export default function WizardMascot({ step, resultsVisible }: { step: number; resultsVisible: boolean }) {
  // Choose the right message
  let idx = resultsVisible ? 3 : step - 1;
  if (idx < 0) idx = 0;
  if (idx > 3) idx = 3;
  const { text } = mascotSteps[idx];

  return (
    <div className="fixed right-4 bottom-4 md:static md:ml-8 flex flex-col items-center z-20 select-none">
      <div className="relative flex flex-col items-center">
        <Image
          src="/images/mascots/mascot-wizard.png"
          alt="Bonus Wizard Mascot"
          width={120}
          height={120}
          className={`drop-shadow-xl animate-mascot-${resultsVisible ? 'celebrate' : 'idle'}`}
          priority
        />
        {/* Speech bubble */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-white text-gray-900 rounded-xl shadow-lg px-4 py-2 text-sm font-semibold max-w-xs border border-purple-300 animate-fade-in-up">
          {text}
        </div>
      </div>
    </div>
  );
}
