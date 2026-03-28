import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Gamepad2, Shuffle, Volume2, Trophy, Star } from "lucide-react";
import gamesData from "../data/dyslexiaGames.json";

export function DyslexiaGames() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [wordGameFeedback, setWordGameFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  const [score, setScore] = useState(0);

  const [selectedPhonetic, setSelectedPhonetic] = useState(0);
  const [readingIndex, setReadingIndex] = useState(0);
  const [currentWordInReading, setCurrentWordInReading] = useState(0);

  const currentWordGame = gamesData.wordGames[currentWordIndex];
  const currentPhonetic = gamesData.phoneticPairs[selectedPhonetic];
  const currentReading = gamesData.readingPractice[readingIndex];

  const handleWordGameSubmit = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === currentWordGame.word.toLowerCase();
    
    setWordGameFeedback({
      correct: isCorrect,
      message: isCorrect
        ? "🎉 Perfect! You unscrambled it!"
        : `Not quite. The word is "${currentWordGame.word}". Try the next one!`,
    });

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextWord = () => {
    if (currentWordIndex < gamesData.wordGames.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setCurrentWordIndex(0);
    }
    setUserAnswer("");
    setWordGameFeedback(null);
  };

  const handleReadWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.8; // Slower for better comprehension
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextWordInReading = () => {
    if (currentWordInReading < currentReading.text.length - 1) {
      setCurrentWordInReading(currentWordInReading + 1);
    }
  };

  const handlePrevWordInReading = () => {
    if (currentWordInReading > 0) {
      setCurrentWordInReading(currentWordInReading - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dyslexia Support Games</h1>
            <p className="text-gray-600">Fun exercises to improve reading skills</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700 border-green-200">
            Module by Person 2
          </Badge>
          <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
            <Trophy className="w-3 h-3 mr-1" />
            Score: {score}
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="word-scramble" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="word-scramble">Word Scramble</TabsTrigger>
          <TabsTrigger value="phonetic">Phonetic Match</TabsTrigger>
          <TabsTrigger value="reading">Read Aloud</TabsTrigger>
        </TabsList>

        {/* Word Scramble Game */}
        <TabsContent value="word-scramble">
          <Card className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Shuffle className="w-5 h-5 text-green-600" />
                  Unscramble the Word
                </h3>
                <Badge className="bg-green-100 text-green-700">
                  Word {currentWordIndex + 1} of {gamesData.wordGames.length}
                </Badge>
              </div>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Scrambled Word:</p>
                  <p className="text-5xl font-bold text-green-700 tracking-widest mb-4 font-mono">
                    {currentWordGame.scrambled}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-700 bg-white/50 px-4 py-2 rounded-lg inline-flex">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Hint: {currentWordGame.hint}</span>
                  </div>
                </div>
              </Card>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Answer:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !wordGameFeedback && handleWordGameSubmit()}
                    placeholder="Type the correct word..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                    disabled={wordGameFeedback !== null}
                  />
                  {!wordGameFeedback ? (
                    <Button onClick={handleWordGameSubmit} disabled={!userAnswer.trim()} size="lg">
                      Check
                    </Button>
                  ) : (
                    <Button onClick={handleNextWord} size="lg">
                      Next
                    </Button>
                  )}
                </div>
              </div>

              {wordGameFeedback && (
                <Card className={`p-4 ${wordGameFeedback.correct ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}`}>
                  <p className={`text-center font-medium ${wordGameFeedback.correct ? "text-green-800" : "text-orange-800"}`}>
                    {wordGameFeedback.message}
                  </p>
                </Card>
              )}
            </div>
          </Card>
        </TabsContent>

        {/* Phonetic Matching */}
        <TabsContent value="phonetic">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-green-600" />
              Phonetic Matching & Rhymes
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Word Selection */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Choose a word:</h4>
                <div className="space-y-2">
                  {gamesData.phoneticPairs.map((pair, index) => (
                    <Card
                      key={pair.id}
                      className={`p-4 cursor-pointer transition-all ${
                        selectedPhonetic === index
                          ? "bg-green-50 border-green-300 shadow-md"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedPhonetic(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-lg text-gray-800">{pair.word}</p>
                          <p className="text-sm text-gray-600">{pair.sound}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadWord(pair.word);
                          }}
                        >
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Rhyming Words */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Words that rhyme with "{currentPhonetic.word}":</h4>
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="grid grid-cols-2 gap-3">
                    {currentPhonetic.rhymesWith.map((rhyme, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group"
                        onClick={() => handleReadWord(rhyme)}
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-800">{rhyme}</p>
                          <Volume2 className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Tip:</strong> Click on any word to hear it pronounced slowly.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Reading Practice */}
        <TabsContent value="reading">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-green-600" />
                Read Aloud with Tracking
              </h3>
              <div className="flex gap-2">
                {gamesData.readingPractice.map((_, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant={readingIndex === index ? "default" : "outline"}
                    onClick={() => {
                      setReadingIndex(index);
                      setCurrentWordInReading(0);
                    }}
                  >
                    Story {index + 1}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <Badge variant="outline" className="mb-4">{currentReading.level}</Badge>
              <h4 className="text-lg font-bold text-gray-800 mb-4">{currentReading.title}</h4>
            </div>

            {/* Word Tracking Display */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 mb-6">
              <div className="flex flex-wrap gap-2 text-2xl leading-relaxed justify-center">
                {currentReading.text.map((word, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer transition-all px-2 py-1 rounded ${
                      index === currentWordInReading
                        ? "bg-yellow-300 text-gray-900 font-bold scale-110 shadow-lg"
                        : index < currentWordInReading
                        ? "text-gray-500"
                        : "text-gray-800 hover:bg-white"
                    }`}
                    onClick={() => {
                      setCurrentWordInReading(index);
                      handleReadWord(word);
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </Card>

            {/* Controls */}
            <div className="flex gap-2 justify-center mb-6">
              <Button
                onClick={handlePrevWordInReading}
                disabled={currentWordInReading === 0}
                variant="outline"
              >
                Previous Word
              </Button>
              <Button
                onClick={() => handleReadWord(currentReading.text[currentWordInReading])}
                className="bg-green-600 hover:bg-green-700"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Read Current Word
              </Button>
              <Button
                onClick={handleNextWordInReading}
                disabled={currentWordInReading === currentReading.text.length - 1}
                variant="outline"
              >
                Next Word
              </Button>
            </div>

            <Card className="p-4 bg-blue-50 border-blue-200">
              <p className="text-sm text-blue-800">
                💡 <strong>How to use:</strong> Click on any word to highlight it and hear it spoken. 
                The yellow highlight shows which word you're on.
              </p>
            </Card>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
