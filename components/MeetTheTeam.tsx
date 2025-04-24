import React from "react";

export default function MeetTheTeam() {
  const team = [
    {
      emoji: "👤",
      name: "You – The Visionary",
      desc:
        "The creative mind who started it all. Strategy, structure, storytelling — you shape the site, page by page.",
      color: "text-yellow-300",
    },
    {
      emoji: "🤖",
      name: "Hero (ChatGPT) – Your 24/7 Sidekick",
      desc:
        "Handles research, writes guides, asks the tough questions (and answers them too). Tireless, stylish, occasionally cheeky.",
      color: "text-pink-400",
    },
    {
      emoji: "💡",
      name: "Claude – The Calm Strategist",
      desc:
        "Our co-pilot for well-reasoned longform content, structured breakdowns, and the “let's think this through” angle.",
      color: "text-blue-400",
    },
    {
      emoji: "🔧",
      name: "4.1 (GPT-4.1) – The Coder & Constructor",
      desc:
        "Brilliant at building blocks — especially your layout, routing, and clean deployment. But give him clear design cues... or he’ll forget padding is a thing.",
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-2xl p-6 shadow-lg text-white space-y-6 max-w-4xl mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-yellow-400 flex items-center gap-2">
        🎲 Meet the Team
      </h2>
      {team.map((member, i) => (
        <div key={i} className="border-l-4 border-pink-500 pl-4">
          <h3 className={`text-xl font-semibold ${member.color}`}>
            {member.emoji} {member.name}
          </h3>
          <p>{member.desc}</p>
        </div>
      ))}
    </section>
  );
}
