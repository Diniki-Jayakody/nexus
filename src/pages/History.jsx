import React from 'react';

const mockHistoryData = [
  {
    stack_score: 51.4165,
    twitter_score: 27.8666,
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
        avg_greatness: 9509.73,
        repo_greatness: 0,
      },
    },
    personality_score: {
      text_confidence: 100.0,
      video_confidence: 12.5,
      audio_confidence: 100,
    },
  },
  {
    stack_score: 64.22,
    twitter_score: 35.9,
    github_score: {
      commit_score: 15.0,
      code_scores: {
        'Modularity & Reusability': 78.5,
        'Readability & Style': 82.0,
        'Total': 76.5,
        'Logic & Flow Control': 80.0,
        'Efficiency & Optimization': 69.0,
        'Error Handling & Robustness': 65.0,
      },
      repo_greatness: {
        avg_greatness: 8423.11,
        repo_greatness: 1,
      },
    },
    personality_score: {
      text_confidence: 98.0,
      video_confidence: 50.0,
      audio_confidence: 90,
    },
  },
  {
    stack_score: 70.8,
    twitter_score: 40.3,
    github_score: {
      commit_score: 25.0,
      code_scores: {
        'Modularity & Reusability': 92.0,
        'Readability & Style': 89.5,
        'Total': 84.3,
        'Logic & Flow Control': 87.0,
        'Efficiency & Optimization': 75.2,
        'Error Handling & Robustness': 70.0,
      },
      repo_greatness: {
        avg_greatness: 10100.0,
        repo_greatness: 2,
      },
    },
    personality_score: {
      text_confidence: 85.0,
      video_confidence: 80.0,
      audio_confidence: 95,
    },
  },
];

const History = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Previous Analysis History</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockHistoryData.map((result, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Result No {index + 1}</h3>

            <div className="mb-2">
              <span className="font-semibold">Stack Score:</span> {result.stack_score.toFixed(2)}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Twitter Score:</span> {result.twitter_score.toFixed(2)}
            </div>

            <div className="mt-4">
              <h4 className="font-bold mb-2">GitHub Code Scores</h4>
              <ul className="text-sm list-disc pl-5">
                {Object.entries(result.github_score.code_scores).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-bold mb-2">Repo Greatness</h4>
              <p className="text-sm">
                <span className="font-medium">Average Greatness:</span> {result.github_score.repo_greatness.avg_greatness.toFixed(2)}<br />
                <span className="font-medium">Repo Greatness:</span> {result.github_score.repo_greatness.repo_greatness}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-bold mb-2">Personality Confidence</h4>
              <ul className="text-sm list-disc pl-5">
                <li><span className="font-medium">Text:</span> {result.personality_score.text_confidence}%</li>
                <li><span className="font-medium">Video:</span> {result.personality_score.video_confidence}%</li>
                <li><span className="font-medium">Audio:</span> {result.personality_score.audio_confidence}%</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
