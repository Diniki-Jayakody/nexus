import React from 'react';

const result = {
  stack_score: 51.416513790979636,
  twitter_score: 27.866666666666667,
  github_score: {
    commit_score: 0.0,
    code_scores: {
      'Modularity & Reusability': 88.125,
      'Readability & Style': 85.0,
      'Total': 79.625,
      'Logic & Flow Control': 85.0,
      'Efficiency & Optimization': 71.875,
      'Error Handling & Robustness': 62.5025,
    },
    repo_greatness: {
      avg_greatness: 9509.733333333334,
      repo_greatness: 0,
    },
  },
  personality_score: {
    text_confidence: 100.0,
    video_confidence: 12.5,
    audio_confidence: 100,
  },
};

const Result = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Evaluation Results</h2>

        {/* Stack & Twitter Scores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Stack Score</h3>
            <p className="text-xl font-bold">{result.stack_score.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Twitter Score</h3>
            <p className="text-xl font-bold">{result.twitter_score.toFixed(2)}</p>
          </div>
        </div>

        {/* GitHub Score */}
        <div className="p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">GitHub Scores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border shadow">
              <p className="font-medium">Commit Score: {result.github_score.commit_score}</p>
              <div className="mt-2">
                <h4 className="font-semibold mb-1">Code Scores:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {Object.entries(result.github_score.code_scores).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span>{key}</span>
                      <span className="font-semibold">{value.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white p-4 rounded border shadow">
              <h4 className="font-semibold mb-2">Repo Greatness</h4>
              <p>Avg Greatness: {result.github_score.repo_greatness.avg_greatness.toFixed(2)}</p>
              <p>Repo Greatness: {result.github_score.repo_greatness.repo_greatness}</p>
            </div>
          </div>
        </div>

        {/* Personality Score */}
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Personality Scores</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            {Object.entries(result.personality_score).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span>{key.replace('_', ' ').replace(/^\w/, c => c.toUpperCase())}</span>
                <span className="font-semibold">{value.toFixed(1)}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;
