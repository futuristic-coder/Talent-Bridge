import { Link } from "react-router";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";

const getDifficultyBadgeClass = (difficulty, isDark) => {
  switch (difficulty?.toLowerCase()) {
    case "easy":
      return isDark
        ? "border border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
        : "border border-emerald-300 bg-emerald-100 text-emerald-700";
    case "medium":
      return isDark
        ? "border border-amber-400/30 bg-amber-500/15 text-amber-300"
        : "border border-amber-300 bg-amber-100 text-amber-700";
    case "hard":
      return isDark
        ? "border border-rose-400/30 bg-rose-500/15 text-rose-300"
        : "border border-rose-300 bg-rose-100 text-rose-700";
    default:
      return isDark
        ? "border border-slate-600 bg-slate-800 text-slate-300"
        : "border border-slate-300 bg-slate-100 text-slate-700";
  }
};

function ProblemsPage({ isDark, setIsDark }) {

  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className={isDark ? "min-h-screen bg-slate-950 text-slate-100" : "min-h-screen bg-slate-100 text-slate-900"}>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className={isDark ? "absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" : "absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-300/40 blur-3xl"} />
        <div className={isDark ? "absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" : "absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl"} />
      </div>

      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className={isDark ? "mb-2 text-4xl font-bold text-white" : "mb-2 text-4xl font-bold text-slate-900"}>
            Practice Problems
          </h1>
          <p className={isDark ? "text-slate-300" : "text-slate-600"}>
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className={
                isDark
                  ? "block rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.01] hover:border-indigo-300/40"
                  : "block rounded-2xl border border-slate-300 bg-white p-5 transition-transform duration-200 hover:scale-[1.01] hover:border-indigo-400"
              }
            >
              <div className="flex items-center justify-between gap-4">
                {/* LEFT SIDE */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <div className={isDark ? "flex size-12 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/10 text-indigo-300" : "flex size-12 items-center justify-center rounded-lg border border-indigo-300 bg-indigo-100 text-indigo-600"}>
                      <Code2Icon className="size-6" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h2 className={isDark ? "text-xl font-bold text-white" : "text-xl font-bold text-slate-900"}>{problem.title}</h2>
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getDifficultyBadgeClass(
                            problem.difficulty,
                            isDark
                          )}`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>
                      <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>{problem.category}</p>
                    </div>
                  </div>
                  <p className={isDark ? "mb-3 text-slate-300" : "mb-3 text-slate-700"}>{problem.description.text}</p>
                </div>
                {/* RIGHT SIDE */}

                <div className={isDark ? "flex items-center gap-2 text-indigo-300" : "flex items-center gap-2 text-indigo-600"}>
                  <span className="font-medium">Solve</span>
                  <ChevronRightIcon className="size-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS FOOTER */}
        <div className={isDark ? "mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" : "mt-12 rounded-2xl border border-slate-300 bg-white p-6"}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>Total Problems</p>
              <p className={isDark ? "mt-1 text-3xl font-bold text-indigo-300" : "mt-1 text-3xl font-bold text-indigo-600"}>{problems.length}</p>
            </div>

            <div>
              <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>Easy</p>
              <p className={isDark ? "mt-1 text-3xl font-bold text-emerald-300" : "mt-1 text-3xl font-bold text-emerald-600"}>{easyProblemsCount}</p>
            </div>
            <div>
              <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>Medium</p>
              <p className={isDark ? "mt-1 text-3xl font-bold text-amber-300" : "mt-1 text-3xl font-bold text-amber-600"}>{mediumProblemsCount}</p>
            </div>
            <div>
              <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>Hard</p>
              <p className={isDark ? "mt-1 text-3xl font-bold text-rose-300" : "mt-1 text-3xl font-bold text-rose-600"}>{hardProblemsCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;