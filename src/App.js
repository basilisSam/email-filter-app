import React, { useState } from 'react';
import { filterEmails } from './utils/emailFilter';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);

  const handleFilter = () => {
    const items = inputText.split('\n').map(line => line.trim());
    const filtered = filterEmails(items);
    setResults(filtered);
    setHasFiltered(true);
  };

  const handleClear = () => {
    setInputText('');
    setResults([]);
    setHasFiltered(false);
  };

  const sampleData = `john@example.com
invalid-email
jane.doe@company.org

not an email
test@test
user@domain.co.uk
@missing.local
nodot@test
admin@server.net`;

  const loadSample = () => {
    setInputText(sampleData);
    setHasFiltered(false);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4 tracking-tight">
            Email Filter
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Enter a list of strings (one per line) and filter out valid email addresses.
            Valid emails must contain both <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded">@</code> and <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded">.</code>
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>
                Input
              </h2>
              <button
                onClick={loadSample}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4"
              >
                Load sample data
              </button>
            </div>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter strings here, one per line..."
              className="w-full h-64 bg-slate-900/80 text-slate-100 rounded-xl p-4 border border-slate-600/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none resize-none font-mono text-sm placeholder-slate-500 transition-all"
              data-testid="input-textarea"
            />

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleFilter}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
                data-testid="filter-button"
              >
                Filter Emails
              </button>
              <button
                onClick={handleClear}
                className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 font-semibold rounded-xl transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50"
                data-testid="clear-button"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-3 h-3 bg-fuchsia-400 rounded-full"></span>
                Valid Emails
              </h2>
              {hasFiltered && (
                <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                  {results.length} found
                </span>
              )}
            </div>

            <div className="h-64 bg-slate-900/80 rounded-xl p-4 border border-slate-600/50 overflow-y-auto" data-testid="results-container">
              {!hasFiltered ? (
                <p className="text-slate-500 text-center mt-20">
                  Click "Filter Emails" to see results
                </p>
              ) : results.length === 0 ? (
                <p className="text-slate-500 text-center mt-20">
                  No valid emails found
                </p>
              ) : (
                <ul className="space-y-2">
                  {results.map((email, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-fuchsia-500/30 transition-colors group"
                      data-testid={`result-item-${index}`}
                    >
                      <span className="text-fuchsia-400 text-lg">✉</span>
                      <span className="text-slate-200 font-mono text-sm group-hover:text-fuchsia-300 transition-colors">
                        {email}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Stats */}
            {hasFiltered && (
              <div className="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">{inputText.split('\n').filter(l => l.trim()).length}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Total Input</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-fuchsia-400">{results.length}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Valid Emails</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
