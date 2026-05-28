"use client";

import { useState } from "react";
import {
  MessageSquare,
  AlertCircle,
  Lightbulb,
  ChevronDown,
  ArrowUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { TextShimmerWave } from "./motion-primitives/text-shimmer-wave";

type CommentType = "feedback" | "bug" | "feature";

interface CommentItem {
  id: string;
  text: string;
  type: CommentType;
  author: string;
  likes: number; // Utilizzato come contatore di upvote fisici
  hasLiked: boolean; // Indica se è stato premuto almeno una volta per lo stato attivo visivo
  avatarBg: string;
}

const RANDOM_NAMES = [
  "Alessandro M.",
  "Elena R.",
  "Luca T.",
  "Giulia V.",
  "Matteo B.",
  "Sofia L.",
  "Davide N.",
  "Chiara F.",
  "Federico G.",
  "Alice P.",
];

const AVATAR_COLORS = [
  "bg-[#6F3BFF]/20 text-[#6F3BFF]",
  "bg-[#FFD84D]/30 text-[#b59210]",
  "bg-[#00C26F]/20 text-[#00A55D]",
  "bg-blue-100 text-blue-600",
  "bg-pink-100 text-pink-600",
];

export default function InteractiveDemo() {
  const [inputText, setInputText] = useState("");
  const [selectedType, setSelectedType] = useState<CommentType>("feedback");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<CommentType>("feedback");

  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "1",
      text: "L'app crasha quando provo a esportare un CSV su mobile (Safari iOS).",
      type: "bug",
      author: "Matteo B.",
      likes: 24,
      hasLiked: false,
      avatarBg: "bg-[#6F3BFF]/20 text-[#6F3BFF]",
    },
    {
      id: "2",
      text: "Sarebbe fantastico avere un'integrazione diretta con Slack o Discord per i digest.",
      type: "feature",
      author: "Elena R.",
      likes: 18,
      hasLiked: false,
      avatarBg: "bg-[#00C26F]/20 text-[#00A55D]",
    },
    {
      id: "3",
      text: "La dashboard è pulita e velocissima, la UX sui filtri settimanali è pazzesca!",
      type: "feedback",
      author: "Alessandro M.",
      likes: 12,
      hasLiked: false,
      avatarBg: "bg-[#FFD84D]/30 text-[#b59210]",
    },
  ]);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const randomAuthor =
      RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
    const randomColor =
      AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

    const newComment: CommentItem = {
      id: Date.now().toString(),
      text: inputText,
      type: selectedType,
      author: randomAuthor,
      likes: 1, // Parte direttamente con 1 upvote automatico del creatore
      hasLiked: true,
      avatarBg: randomColor,
    };

    setComments([newComment, ...comments]);
    setActiveTab(selectedType);
    setInputText("");
  };

  // Funzione cumulativa: permette upvote infiniti incrementando sempre di +1
  const handleUpvote = (id: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.likes + 1,
            hasLiked: true, // Resta attivo/colorato dal primo click in poi
          };
        }
        return comment;
      }),
    );
  };

  const filteredAndSortedComments = comments
    .filter((c) => c.type === activeTab)
    .sort((a, b) => b.likes - a.likes);

  return (
    <Card className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.08)] transition-all">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="font-[Lora] text-2xl font-semibold">Prova Live</p>
          <TextShimmerWave
            duration={1}
            spread={1}
            zDistance={3}
            scaleDistance={1.1}
            rotateYDistance={10}
            className="mt-1 font-[Poppins] text-sm [--base-color:oklch(0.556 0 0)] [--base-gradient-color:oklch(0.708 0 0)]"
          >
            Invia un feedback reale e fai upvote ripetutamente...
          </TextShimmerWave>
        </div>
      </div>

      <div className="space-y-6">
        {/* INPUT FORM */}
        <form
          onSubmit={handleSendFeedback}
          className="rounded-3xl border border-black/10 bg-[#faf8f5] p-5"
        >
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Scrivi una richiesta o un bug (es. Integrazione Notion, Errore nel login...)"
            className="border-0 bg-transparent p-0 font-poppins text-base shadow-none focus-visible:ring-0 placeholder:text-black/30"
          />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            {/* TIPO FEEDBACK DROPDOWN */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 rounded-xl bg-black/5 px-4 py-2 font-poppins text-sm text-black/70 transition hover:bg-black/10"
              >
                {selectedType === "feedback" && (
                  <MessageSquare className="h-4 w-4 text-[#6F3BFF]" />
                )}
                {selectedType === "bug" && (
                  <AlertCircle className="h-4 w-4 text-[#6F3BFF]" />
                )}
                {selectedType === "feature" && (
                  <Lightbulb className="h-4 w-4 text-[#6F3BFF]" />
                )}
                <span className="capitalize">
                  {selectedType === "feature"
                    ? "Feature Request"
                    : selectedType}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 z-20 w-48 rounded-2xl border border-black/5 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-200 font-poppins text-sm">
                  {(["feedback", "bug", "feature"] as CommentType[]).map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setSelectedType(type);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center gap-2 w-full rounded-xl px-3 py-2 text-left capitalize transition ${
                          selectedType === type
                            ? "bg-[#6F3BFF]/10 text-[#6F3BFF] font-medium"
                            : "hover:bg-black/5 text-black/70"
                        }`}
                      >
                        {type === "feedback" && (
                          <MessageSquare className="h-4 w-4 shrink-0" />
                        )}
                        {type === "bug" && (
                          <AlertCircle className="h-4 w-4 shrink-0" />
                        )}
                        {type === "feature" && (
                          <Lightbulb className="h-4 w-4 shrink-0" />
                        )}
                        <span>
                          {type === "feature" ? "Feature Request" : type}
                        </span>
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="group flex items-center gap-2 rounded-2xl bg-[#6F3BFF] font-poppins hover:bg-[#5a2be0] text-white px-5"
            >
              <span>Invia</span>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* CONTENITORE TAB E LISTA FEEDBACK */}
        <div className="pt-2">
          {/* Selettori dei Tab */}
          <div className="flex gap-2 border-b border-black/5 pb-3">
            {(["feedback", "bug", "feature"] as CommentType[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 font-poppins text-sm font-medium rounded-xl transition ${
                  activeTab === tab
                    ? "bg-[#111111] text-white shadow-sm"
                    : "text-black/50 hover:bg-black/5 hover:text-black"
                }`}
              >
                {tab === "feedback" && <MessageSquare className="h-4 w-4" />}
                {tab === "bug" && <AlertCircle className="h-4 w-4" />}
                {tab === "feature" && <Lightbulb className="h-4 w-4" />}
                <span className="capitalize">
                  {tab === "feature" ? "Features" : tab}
                </span>
                <span
                  className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${activeTab === tab ? "bg-white/20 text-white" : "bg-black/5 text-black/60"}`}
                >
                  {comments.filter((c) => c.type === tab).length}
                </span>
              </button>
            ))}
          </div>

          {/* Lista Ordinata per Upvote */}
          <div className="mt-4 space-y-2 max-h-50 pr-1 overflow-y-auto">
            {filteredAndSortedComments.length === 0 ? (
              <p className="font-poppins text-sm text-black/40 italic py-8 text-center animate-in fade-in duration-300">
                Nessun elemento presente in questa categoria. Scrivi il primo
                qui sopra!
              </p>
            ) : (
              filteredAndSortedComments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-sm transition-all duration-300 animate-in fade-in slide-in-from-top-3 duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-poppins text-sm font-bold shadow-inner ${comment.avatarBg}`}
                    >
                      {comment.author.charAt(0)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-poppins text-xs font-semibold text-black/80">
                          {comment.author}
                        </span>
                        <span className="rounded-full bg-black/5 px-2 py-0.5 font-poppins text-[10px] uppercase text-black/40 font-medium">
                          {comment.type === "feature" ? "idea" : comment.type}
                        </span>
                      </div>
                      <p className="mt-1 font-poppins text-sm text-black/70 leading-snug">
                        {comment.text}
                      </p>
                    </div>
                  </div>

                  {/* PULSANTE UPVOTE INTERATTIVO MULTI-CLICK */}
                  <button
                    type="button"
                    onClick={() => handleUpvote(comment.id)}
                    className="flex flex-row items-center gap-1.5 rounded-xl px-3 h-9 border transition-all duration-200 w-14 justify-center select-none shrink-0
                      active:scale-95 active:bg-[#6F3BFF]/5 group"
                  >
                    <ArrowUp className="h-4 w-4 shrink-0 transition-transform duration-200 " />
                    <span className="font-poppins text-xs tabular-nums leading-none">
                      {comment.likes}
                    </span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
