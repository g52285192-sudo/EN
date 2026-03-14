/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  BookOpen, 
  Trophy,
  ExternalLink,
  Filter,
  GraduationCap
} from 'lucide-react';
import { QUESTION_BANK } from './constants';
import { Question, UserAnswer, Difficulty } from './types';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'All'>('All');

  const filteredQuestions = useMemo(() => {
    if (filterDifficulty === 'All') return QUESTION_BANK;
    return QUESTION_BANK.filter(q => q.difficulty === filterDifficulty);
  }, [filterDifficulty]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleSelectOption = (option: string) => {
    if (submitted[currentQuestion.id]) return;
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
  };

  const handleSubmit = () => {
    if (!userAnswers[currentQuestion.id]) return;
    setSubmitted(prev => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setSubmitted({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const getEncouragement = (score: number, total: number) => {
    const ratio = score / total;
    if (ratio === 1) return "完美！你已经掌握了这些语法点！🌟";
    if (ratio >= 0.8) return "太棒了！你的语法基础非常扎实！🚀";
    if (ratio >= 0.6) return "不错哦！再接再厉，你会做得更好！💪";
    return "没关系，学习是一个过程。仔细看解析，加油！📚";
  };

  if (showResults) {
    const score = calculateScore();
    const total = filteredQuestions.length;
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[32px] shadow-xl p-8 max-w-md w-full text-center border border-black/5"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">练习完成</h2>
          <div className="text-5xl font-serif font-black text-emerald-600 mb-4">
            {score} <span className="text-2xl text-gray-400">/ {total}</span>
          </div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {getEncouragement(score, total)}
          </p>
          <button 
            onClick={handleRestart}
            className="w-full bg-[#5A5A40] text-white rounded-full py-4 font-medium flex items-center justify-center gap-2 hover:bg-[#4A4A30] transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            重新开始
          </button>
        </motion.div>
      </div>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">没有找到匹配的题目</p>
          <button onClick={() => setFilterDifficulty('All')} className="text-[#5A5A40] underline">清除过滤器</button>
        </div>
      </div>
    );
  }

  const isCurrentSubmitted = submitted[currentQuestion.id];
  const selectedOption = userAnswers[currentQuestion.id];
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-gray-900 font-sans selection:bg-emerald-100">
      {/* Header */}
      <header className="bg-white border-b border-black/5 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5A5A40] rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold">GrammarMaster</h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Interactive Learning</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5">
              <Filter className="w-4 h-4 text-gray-400" />
              <select 
                value={filterDifficulty} 
                onChange={(e) => {
                  setFilterDifficulty(e.target.value as any);
                  setCurrentIndex(0);
                }}
                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="All">所有难度</option>
                <option value="Beginner">初级</option>
                <option value="Intermediate">中级</option>
                <option value="Advanced">高级</option>
              </select>
            </div>
            <div className="text-sm font-medium text-gray-500">
              题目 {currentIndex + 1} / {filteredQuestions.length}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full mb-12 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
            className="h-full bg-[#5A5A40]"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Question Card */}
            <div className="bg-white rounded-[32px] shadow-sm border border-black/5 p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  currentQuestion.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-700' :
                  currentQuestion.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                  'bg-rose-100 text-rose-700'
                }`}>
                  {currentQuestion.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                  {currentQuestion.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-medium leading-relaxed mb-12">
                {currentQuestion.sentence.split('____').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className={`inline-block min-w-[120px] border-b-2 mx-2 text-center transition-colors ${
                        isCurrentSubmitted 
                          ? (isCorrect ? 'text-emerald-600 border-emerald-600' : 'text-rose-600 border-rose-600')
                          : (selectedOption ? 'text-[#5A5A40] border-[#5A5A40]' : 'border-gray-300')
                      }`}>
                        {selectedOption || '____'}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    disabled={isCurrentSubmitted}
                    onClick={() => handleSelectOption(option)}
                    className={`
                      px-6 py-4 rounded-2xl text-lg font-medium transition-all text-left flex items-center justify-between
                      ${selectedOption === option 
                        ? 'bg-[#5A5A40] text-white shadow-lg scale-[1.02]' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}
                      ${isCurrentSubmitted && option === currentQuestion.correctAnswer && !isCorrect ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}
                      ${isCurrentSubmitted && option === selectedOption && !isCorrect ? 'bg-rose-500 text-white' : ''}
                      ${isCurrentSubmitted && option === selectedOption && isCorrect ? 'bg-emerald-500 text-white' : ''}
                      disabled:cursor-default
                    `}
                  >
                    {option}
                    {isCurrentSubmitted && option === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                    {isCurrentSubmitted && option === selectedOption && !isCorrect && (
                      <XCircle className="w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation Card */}
            <AnimatePresence>
              {isCurrentSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-white rounded-[32px] shadow-sm border border-black/5 overflow-hidden"
                >
                  <div className={`p-1 flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest ${isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                    {isCorrect ? '回答正确' : '回答错误'}
                  </div>
                  <div className="p-8 sm:p-10 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">语法详解</h4>
                        <p className="text-gray-600 leading-relaxed">{currentQuestion.explanation.rule}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">经典例句</h4>
                        <p className="text-gray-800 italic font-serif">"{currentQuestion.explanation.example}"</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">常见误区</h4>
                        <p className="text-gray-600">{currentQuestion.explanation.commonMistake}</p>
                      </div>
                    </div>

                    {currentQuestion.explanation.reviewLink && (
                      <div className="pt-4">
                        <a 
                          href={currentQuestion.explanation.reviewLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#5A5A40] hover:underline"
                        >
                          查看相关语法复习 <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 disabled:opacity-0 transition-all font-medium"
              >
                <ChevronLeft className="w-5 h-5" />
                上一题
              </button>

              {!isCurrentSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedOption}
                  className="bg-[#5A5A40] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#4A4A30] transition-all disabled:opacity-50 disabled:scale-100 active:scale-95"
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-[#5A5A40] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#4A4A30] transition-all flex items-center gap-2 active:scale-95"
                >
                  {currentIndex === filteredQuestions.length - 1 ? '查看结果' : '下一题'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-black/5 text-center">
        <p className="text-sm text-gray-400">
          通过情境化选择与即时反馈，强化复杂句法结构辨析能力。
        </p>
      </footer>
    </div>
  );
}
