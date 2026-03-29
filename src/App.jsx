import { useState } from "react";

const STUDY_NOTES = [
  {
    session: 1,
    date: "March 22, 2026",
    title: "Orientation — Exam Guide, Domains & Mental Models",
    duration: "~5 hrs",
    weekRef: "Week 1",
    keyTakeaways: [
      "The CCA exam has 5 domains: Agentic Architecture (27%), Tool Design & MCP (18%), Claude Code Config (20%), Prompt Engineering (20%), Context Management (15%).",
      "The agent loop — Think → Act → Observe → Repeat — is the heartbeat of every Claude agent system.",
      "The 4-layer agent stack: Claude Code → Agent SDK → MCP → Agent Teams. Each layer adds capability and complexity.",
      "The exam tests architectural decision-making, not coding ability. You need to read code, not write it from scratch.",
      "Single-agent vs multi-agent is a core architectural decision. Start simple, add agents only when needed."
    ],
    concepts: [
      { term: "CCA Foundations Exam", explanation: "A certification exam from Anthropic testing your ability to architect Claude-powered systems. 5 domains, scenario-based questions.", examRelevance: "This IS the exam. Understanding its structure is step one." },
      { term: "Agent Loop (Think → Act → Observe → Repeat)", explanation: "The fundamental cycle every Claude agent follows. Claude thinks about what to do, takes an action (like calling a tool), observes the result, and repeats until the task is complete.", examRelevance: "Domain 1 — foundation of all agentic architecture questions." },
      { term: "4-Layer Agent Stack", explanation: "Claude Code (direct coding assistant) → Agent SDK (programmatic agent control) → MCP (connecting to external tools) → Agent Teams (multiple agents coordinating).", examRelevance: "Domain 1 — knowing which layer to use for a given problem is a core exam skill." },
      { term: "Domain Weights", explanation: "Agentic Architecture 27%, Prompt Engineering 20%, Claude Code Config 20%, Tool Design & MCP 18%, Context Management 15%.", examRelevance: "Meta-knowledge — allocate study time proportional to domain weights." },
      { term: "Exam Scenarios", explanation: "The CCA exam uses 6 real-world scenarios as contexts for questions. Each scenario maps to 2-3 domains.", examRelevance: "All domains — scenarios are the delivery mechanism for exam questions." },
      { term: "CLAUDE.md Files", explanation: "Manually created configuration files that give Claude persistent instructions for a project. Three scopes: user-level, project-level, local-level.", examRelevance: "Domain 3 — CLAUDE.md configuration is a major exam topic." },
      { term: "Skills vs CLAUDE.md", explanation: "CLAUDE.md files are manually created config files in your project. Skills are capability bundles injected at runtime into sandboxed VM environments — they don’t exist on your local filesystem.", examRelevance: "Domain 3 — understanding the difference between static config and runtime capabilities." },
      { term: "MCP (Model Context Protocol)", explanation: "A universal standard for connecting Claude to external tools and data sources. Think of it as a USB port — any tool that speaks MCP can plug into Claude.", examRelevance: "Domain 2 — MCP is the entire focus of tool integration questions." },
      { term: "Claude Code", explanation: "A command-line tool for agentic coding. Claude Code turns Claude into a software developer agent that can read, write, and edit code autonomously.", examRelevance: "Domain 3 — Claude Code configuration and workflows make up 20% of the exam." },
      { term: "Agent SDK", explanation: "Anthropic’s Python framework for building custom agents with features like Agents, Handoffs, Guardrails, and Tracing.", examRelevance: "Domain 1 — understanding when to use the Agent SDK vs other approaches." },
      { term: "Claude in Chrome", explanation: "A browser extension that turns Claude into a web browsing agent, able to navigate pages, fill forms, and extract information.", examRelevance: "Domain 3 — understanding Claude’s product ecosystem and tool options." },
      { term: "Cowork", explanation: "A desktop tool that gives Claude access to your local computer environment for file management and automation tasks.", examRelevance: "Domain 3 — understanding Claude’s product ecosystem." }
    ],
    examInsights: [
      "The Out-of-Scope list is as valuable as the In-Scope list. You do NOT need to study: fine-tuning, vector databases, cloud provider configs, OAuth details, streaming APIs, rate limiting, or Claude’s internal architecture.",
      "The exam uses 6 scenarios as question contexts. Each scenario maps to 2-3 primary domains.",
      "The 4 preparation exercises in the exam guide (pages 33-36) map directly to exam question patterns."
    ],
    selfAssessment: "All 5 domains felt largely unfamiliar. Domains 1, 3, and 5 are weakest. The core agent loop concept makes sense."
  },
  {
    session: 2,
    date: "March 23, 2026",
    title: "Python Environment, First API Calls & Interactive Chatbot",
    duration: "~5 hrs",
    weekRef: "Week 1",
    keyTakeaways: [
      "Set up complete Python dev environment: Python 3.14.3, venv, pip, VS Code with Jupyter and Python extensions.",
      "Made first Claude API calls via both curl and Python.",
      "Built an interactive chatbot with personality selection and multi-turn conversations.",
      "Claude is stateless — every API call must send the ENTIRE conversation history.",
      "Streaming delivers response tokens in real-time chunks instead of waiting for the complete response."
    ],
    concepts: [
      { term: "Virtual Environment (venv)", explanation: "An isolated Python workspace that keeps your project’s packages separate. Like separate toolboxes for different jobs.", examRelevance: "Domain 3 — environment setup and project isolation." },
      { term: "pip (Package Installer)", explanation: "Downloads and installs Python libraries from the internet. Like an app store for Python code.", examRelevance: "Domain 3 — dependency management in development workflows." },
      { term: ".env File", explanation: "Stores sensitive configuration values (like API keys) outside your code. Never shared or uploaded.", examRelevance: "Domain 2 & 3 — secure credential management." },
      { term: "curl", explanation: "A command-line tool that sends HTTP requests directly to APIs. Shows the raw request/response structure.", examRelevance: "Understanding raw API communication helps with all domains." },
      { term: "import anthropic", explanation: "Loads the Anthropic Python library into memory. The library provides the client object for talking to Claude’s API.", examRelevance: "Foundation — every code example on the exam uses this." },
      { term: "client.messages.create()", explanation: "The main method for sending messages to Claude’s API. Takes model, max_tokens, and messages as parameters.", examRelevance: "Domain 4 — understanding the API call structure." },
      { term: "Conversation History (messages list)", explanation: "The full list of user/assistant messages sent with every API call. Claude is stateless — it has zero memory between calls.", examRelevance: "Domain 5 — context management is rooted in this statelessness." },
      { term: "Streaming", explanation: "Receiving Claude’s response token-by-token in real-time instead of waiting for the complete response.", examRelevance: "Domain 4 — streaming is a practical implementation pattern." },
      { term: "System Prompt", explanation: "A special message that sets Claude’s behavior and personality for the entire conversation.", examRelevance: "Domain 4 — system prompts are a key prompt engineering technique." },
      { term: "stop_reason", explanation: "Tells you WHY Claude stopped responding: 'end_turn' (chose to stop), 'tool_use' (wants a tool), 'stop_sequence' (hit your stop sign).", examRelevance: "Domain 1 & 4 — stop_reason drives agent loop decisions." }
    ],
    examInsights: [
      "Claude’s statelessness is the ROOT CAUSE of Domain 5 (Context Management). Every optimization technique exists because you must resend everything every time.",
      "The response structure (stop_reason, content blocks, token usage) appears in every domain’s code examples."
    ],
    selfAssessment: "Python environment fully functional. API calls understood at both curl and library levels. Chatbot demonstrates multi-turn conversation management."
  },
  {
    session: 3,
    date: "March 24, 2026",
    title: "Prefilling, Stop Sequences, Prompt Engineering & Tool Use Foundations",
    duration: "~4 hrs",
    weekRef: "Week 1",
    keyTakeaways: [
      "Message prefilling forces Claude to continue from a specific starting point.",
      "Stop sequences cut Claude off at specific text patterns — a programmatic control mechanism.",
      "Prompt engineering patterns: XML tags, few-shot examples, chain-of-thought reasoning.",
      "Tool use requires JSON schemas that describe what each tool does and its parameters.",
      "CI/CD pipeline integration with Claude Code is a Domain 3 concept."
    ],
    concepts: [
      { term: "Message Prefilling", explanation: "Adding an assistant message BEFORE sending to Claude. Forces continuation from that point. Like a relay race — you run the first 10 meters, Claude runs the rest.", examRelevance: "Domain 4 — key prompt engineering technique for controlling output format." },
      { term: "Stop Sequences", explanation: "Strings that tell Claude to stop immediately when about to write them. Returns stop_reason: 'stop_sequence'.", examRelevance: "Domain 4 — programmatic control mechanism tested alongside other output methods." },
      { term: "Triple Quotes (\"\"\")", explanation: "Python syntax for multi-line strings. Used constantly for prompts because they’re often long, multi-line instructions.", examRelevance: "Not tested directly but appears in every code example on the exam." },
      { term: "import json", explanation: "Python’s built-in library for JSON data. json.loads() converts string to data, json.dumps() converts data to string.", examRelevance: "JSON parsing appears throughout — tool definitions, structured output, batch processing." },
      { term: "XML Tags in Prompts", explanation: "Using tags like <instructions>, <context>, <examples> to organize prompts. Helps Claude parse complex instructions.", examRelevance: "Domain 4 — XML tag structures are a core prompt engineering best practice." },
      { term: "Few-Shot Examples", explanation: "Showing Claude examples of desired input/output before asking it to perform. ‘Show, don’t just tell.’", examRelevance: "Domain 4 — few-shot prompting is a fundamental technique." },
      { term: "Chain-of-Thought Prompting", explanation: "Asking Claude to show its reasoning step-by-step before giving a final answer.", examRelevance: "Domain 4 — improves accuracy on complex reasoning tasks." },
      { term: "Tool Use (Function Calling)", explanation: "Defining tools with JSON schemas so Claude can request specific actions. Claude returns a ToolUseBlock instead of text when it wants to use a tool.", examRelevance: "Domain 2 — tool definition schemas are a major exam topic." },
      { term: "JSON Schema", explanation: "A standard format for describing the structure of data. Used to define tool parameters so Claude knows what inputs each tool expects.", examRelevance: "Domain 2 — writing correct tool schemas is directly tested." },
      { term: "CI/CD Pipeline", explanation: "Continuous Integration/Continuous Deployment — automated testing and deployment every time code is pushed.", examRelevance: "Domain 3 — Claude Code integration into CI/CD pipelines." },
      { term: "datetime and timedelta", explanation: "Python’s built-in modules for working with dates and times. datetime.now() gets current time, timedelta represents a duration.", examRelevance: "Appears in tool use examples and scheduling-related exam scenarios." }
    ],
    examInsights: [
      "Prompt engineering (Domain 4, 20%) overlaps heavily with tool use (Domain 2, 18%). A well-designed tool schema IS prompt engineering.",
      "The exam may present a scenario and ask which prompt engineering technique is most appropriate. Know when to use prefilling vs stop sequences vs XML tags vs few-shot."
    ],
    selfAssessment: "Prompt engineering patterns absorbed conceptually. Tool use foundations established — JSON schemas understood. Ready for hands-on tool use coding."
  },
  {
    session: 4,
    date: "March 25, 2026",
    title: "Tool Use Deep Dive — ToolUseBlock, Streaming, Text Editor",
    duration: "~4 hrs",
    weekRef: "Week 1",
    keyTakeaways: [
      "When Claude wants a tool, it returns ONLY a ToolUseBlock with no text — tool requests are all-or-nothing.",
      "Double asterisk (**) unpacking passes dictionary keys as function parameters automatically.",
      "The run_tools switchboard function routes tool calls to the right handler.",
      "Streaming with tools requires handling both text and tool_use content blocks.",
      "The text editor tool pattern includes path validation and automatic backup."
    ],
    concepts: [
      { term: "ToolUseBlock", explanation: "The content block Claude returns when requesting a tool. Contains: type ('tool_use'), id (unique), name (which tool), input (parameters). Claude sends ONLY this — no text alongside it.", examRelevance: "Domain 2 — understanding the tool use response structure." },
      { term: "Double Asterisk Unpacking (**)", explanation: "Python syntax that spreads a dictionary into function parameters. {'city': 'Dover', 'unit': 'F'} becomes city='Dover', unit='F'.", examRelevance: "Appears in tool use code patterns on the exam." },
      { term: "Tool Result Block", explanation: "What you send back to Claude after running a tool. Contains: tool_use_id (matching the request), type ('tool_result'), content (the result), is_error (optional).", examRelevance: "Domain 2 — the complete tool use cycle: Claude requests → you execute → you return results." },
      { term: "isinstance() Type Checking", explanation: "Python function that checks if an object is a specific type. isinstance(block, ToolUseBlock) returns True/False.", examRelevance: "Common pattern in tool use code for routing content blocks." },
      { term: "Inline If Expression (Ternary)", explanation: "Python one-liner: value_if_true if condition else value_if_false. Compact conditional logic.", examRelevance: "Appears frequently in exam code snippets." },
      { term: "List Comprehension", explanation: "Python one-liner for filtering/transforming lists: [x for x in items if condition]. Like a filter + transform in one line.", examRelevance: "Common in exam code for processing content blocks." },
      { term: "run_tools Switchboard Function", explanation: "A function that takes Claude’s tool request, routes it to the correct handler function, executes it, and returns the result.", examRelevance: "Domain 1 & 2 — the switchboard pattern is a core agent architecture component." },
      { term: "Streaming with Tools", explanation: "When streaming, tool use comes as input_json delta events that build up incrementally. You accumulate chunks until the tool call is complete.", examRelevance: "Domain 4 — streaming implementation patterns." },
      { term: "Text Editor Tool Pattern", explanation: "A tool that lets Claude read/write/edit files with built-in safety: path validation (no escape from project directory) and automatic backup before modifications.", examRelevance: "Domain 2 & 3 — tool safety patterns and file system access controls." },
      { term: "try/except Error Handling", explanation: "Python’s way of catching errors gracefully. try: runs code, except: handles failures. Critical for tool use — tools can fail.", examRelevance: "Domain 2 — error handling in tool calls is directly tested." }
    ],
    examInsights: [
      "Tool use is a CYCLE, not a one-shot: Claude requests tool → your code executes → your code returns result → Claude processes result. The exam tests each step.",
      "The is_error field in tool results is how you tell Claude a tool failed gracefully. Without it, Claude might not know something went wrong."
    ],
    selfAssessment: "Tool use mechanics fully understood. The switchboard pattern, error handling, and streaming with tools are clear. Ready for RAG module."
  },
  {
    session: 5,
    date: "March 26, 2026",
    title: "RAG, Embeddings, Vector Databases & Claude Features",
    duration: "~3.5 hrs",
    weekRef: "Week 1",
    keyTakeaways: [
      "RAG solves Claude’s knowledge limitation by retrieving relevant documents and injecting them into the prompt.",
      "Text embeddings convert text into number arrays that capture meaning — similar texts get similar numbers.",
      "Vector databases store embeddings and enable fast similarity search across millions of documents.",
      "BM25 (lexical search) catches exact keyword matches; semantic search catches meaning. Hybrid combines both.",
      "Prompt caching saves money by reusing static parts of prompts across multiple calls."
    ],
    concepts: [
      { term: "RAG (Retrieval Augmented Generation)", explanation: "A pattern that fetches relevant documents from a knowledge base and injects them into Claude’s prompt. Like putting a case file on a lawyer’s desk before asking them to argue the case.", examRelevance: "Domain 5 — RAG is a core context management strategy." },
      { term: "Text Embeddings", explanation: "Converting text into arrays of numbers (vectors) that capture semantic meaning. Similar texts produce similar vectors.", examRelevance: "Domain 5 — embeddings power the retrieval step in RAG pipelines." },
      { term: "Vector Database", explanation: "A specialized database that stores embeddings and enables fast similarity search. Examples: Pinecone, ChromaDB, Weaviate.", examRelevance: "Domain 5 — choosing the right vector database is an architectural decision." },
      { term: "Cosine Similarity", explanation: "Measures how similar two vectors are by comparing their direction (0 to 1, where 1 = identical meaning).", examRelevance: "Domain 5 — the math behind semantic search in RAG systems." },
      { term: "BM25 (Lexical Search)", explanation: "A keyword-based search algorithm that ranks documents by term frequency. Catches exact matches but misses synonyms.", examRelevance: "Domain 5 — BM25 vs semantic search is an architectural choice the exam tests." },
      { term: "Hybrid Search", explanation: "Combining BM25 (keyword) and semantic (meaning) search for more comprehensive retrieval.", examRelevance: "Domain 5 — hybrid search is often the recommended approach for production RAG." },
      { term: "Document Chunking", explanation: "Breaking large documents into smaller pieces before embedding. Chunk size affects retrieval quality.", examRelevance: "Domain 5 — chunking strategy is a design decision in RAG pipelines." },
      { term: "Prompt Caching (cache_control)", explanation: "Marking static parts of prompts with cache_control so Anthropic caches them server-side. Reduces cost on repeated calls with the same system prompt.", examRelevance: "Domain 5 — prompt caching is a top cost optimization strategy." },
      { term: "Extended Thinking (budget_tokens)", explanation: "Giving Claude a ‘thinking budget’ for complex reasoning. More thinking = better answers but higher cost.", examRelevance: "Domain 4 & 5 — budget_tokens is a tradeoff between quality and cost." },
      { term: "VoyageAI", explanation: "A third-party embedding service used to convert text into vectors. Follows the same API key + library pattern as Claude.", examRelevance: "Domain 5 — understanding embedding service integration." }
    ],
    examInsights: [
      "RAG is a Domain 5 topic but also an architectural pattern (Domain 1) and a prompt engineering technique (Domain 4). Expect cross-domain questions.",
      "The architect must choose between semantic search, lexical search, or hybrid. Know the tradeoffs.",
      "Prompt caching is one of the top cost optimization strategies the exam tests.",
      "Extended thinking’s budget_tokens is a tradeoff: more thinking = better reasoning but higher cost and context usage.",
      "The API key + library pattern (get key, install package) applies to every external service integration."
    ],
    selfAssessment: "RAG pipeline fully understood: chunking → embedding → vector storage → query embedding → similarity search → context injection → Claude generates. BM25 as alternative/complement clear. Prompt caching understood."
  },
  {
    session: 6,
    date: "March 27, 2026",
    title: "MCP Deep Dive, Workflow Patterns & Agents vs Workflows",
    duration: "~3.5 hrs",
    weekRef: "Week 1",
    keyTakeaways: [
      "MCP Server hosts tools, resources, and prompts. MCP Client lives inside your code. Claude discovers and uses tools autonomously.",
      "FastMCP is the Python framework for building MCP servers using decorators and type hints.",
      "The three MCP primitives: Tools (actions/verbs), Resources (data/nouns), Prompts (templates/macros).",
      "Three workflow patterns: Parallelization (independent tasks), Chaining (sequential dependencies), Routing (classifier dispatches).",
      "Agents = Claude controls the flow (flexible). Workflows = developer controls the flow (predictable)."
    ],
    concepts: [
      { term: "MCP Server", explanation: "A program that hosts tools, resources, and prompts for Claude to discover and use. Like a waiter menu — it lists what’s available.", examRelevance: "Domain 2 — MCP server architecture is core exam content." },
      { term: "MCP Client", explanation: "The communication layer inside YOUR server code that talks to MCP servers. It’s the phone line between your app and the tool server.", examRelevance: "Domain 2 — understanding where the client lives in the architecture." },
      { term: "FastMCP", explanation: "Anthropic’s Python framework for building MCP servers. Uses @mcp.tool() decorators, Field() for parameter descriptions, and type hints.", examRelevance: "Domain 2 — FastMCP is the standard way to build MCP servers." },
      { term: "MCP Tools (Actions/Verbs)", explanation: "Functions Claude can call to DO things. Like verbs — search, create, delete, update.", examRelevance: "Domain 2 — tools are the most commonly tested MCP primitive." },
      { term: "MCP Resources (Data/Nouns)", explanation: "Read-only data Claude can ACCESS. Like nouns — files, database records, config values.", examRelevance: "Domain 2 — knowing when to use resources vs tools." },
      { term: "MCP Prompts (Templates/Macros)", explanation: "Pre-built workflow templates that combine instructions and context. Like saved macros that set up a complex task.", examRelevance: "Domain 2 — prompts are the least intuitive primitive and frequently tested." },
      { term: "stdio vs SSE Transport", explanation: "Two ways MCP servers communicate. stdio = local (same machine, piped through standard input/output). SSE = remote (over HTTP, server-sent events).", examRelevance: "Domain 2 — transport choice depends on deployment architecture." },
      { term: "MCP Inspector", explanation: "A browser-based testing tool for MCP servers. Connect to your server, test tools, resources, and prompts visually.", examRelevance: "Domain 2 & 3 — testing and debugging MCP integrations." },
      { term: "Field() with description", explanation: "FastMCP pattern for adding parameter descriptions: Field(description='...'). Helps Claude understand what each parameter does.", examRelevance: "Domain 2 — good tool descriptions improve Claude’s tool selection accuracy." },
      { term: "Parallelization Workflow", explanation: "Multiple tasks run simultaneously, results combined at end. Like a restaurant kitchen preparing all dishes at once. Requires independent tasks.", examRelevance: "Domain 1 — one of the core workflow patterns." },
      { term: "Chaining Workflow", explanation: "Output of step 1 feeds into step 2, sequentially. Like an assembly line. Each step must finish before the next begins.", examRelevance: "Domain 1 — chaining is a prompt decomposition strategy." },
      { term: "Routing Workflow", explanation: "A classifier examines input and sends it to the right specialist handler. Like a hospital triage nurse.", examRelevance: "Domain 1 — routing is heavily tested in customer support scenarios." },
      { term: "Agents vs Workflows", explanation: "Agents = Claude controls flow autonomously (flexible but less reliable). Workflows = developer controls flow with fixed steps (predictable but less adaptable).", examRelevance: "Domain 1 — one of the most critical exam distinctions." },
      { term: "Agents and Tools Pattern", explanation: "Give Claude a goal and reasonably abstract tools. Claude formulates its own plan. Challenge is reliability and economy.", examRelevance: "Domain 1 — agents provide flexibility at the cost of reliability and cost efficiency." },
      { term: "Official vs Community vs Custom MCP Servers", explanation: "Official = built by the company (highest trust). Community = independent developers (needs review). Custom = built by you for proprietary systems.", examRelevance: "Domain 2 — the ‘build vs use’ decision for MCP servers." },
      { term: "GHL MCP Server", explanation: "Go High Level has both an official MCP server and a community server (269+ tools). Connects Claude to contacts, messaging, calendars, pipelines.", examRelevance: "Domain 2 — real-world MCP server evaluation example." }
    ],
    examInsights: [
      "MCP architecture (client inside your server, server hosting tools, Claude making decisions) is core Domain 2.",
      "The three MCP primitives serve different purposes. Choosing the wrong primitive is an anti-pattern the exam tests.",
      "Agents vs Workflows is one of the most critical Domain 1 distinctions.",
      "Parallelization, chaining, and routing are the three core workflow patterns. Know each one’s requirements.",
      "The ‘build vs use’ decision for MCP servers is an architectural judgment the exam tests."
    ],
    selfAssessment: "MCP architecture fully understood. FastMCP framework understood conceptually. Agents vs workflows distinction locked in. Parallelization, chaining, and routing patterns clear."
  },
  {
    session: 7,
    date: "March 28, 2026",
    title: "Agents Deep Dive, Environment Inspection & Course Completion",
    duration: "~1.5 hrs",
    weekRef: "Week 1 — COURSE COMPLETED (100%)",
    keyTakeaways: [
      "An agent is NOT a tool or function. An agent is the LLM (brain) + goal + tools + autonomy to loop.",
      "The LLM (Opus, Sonnet) is the brain. Agent frameworks (Claude Code, Cowork, Chrome) are wrappers that give the brain a job.",
      "Tool use = predetermined steps, no loop, code controls flow. Agent = while True loop, Claude controls flow.",
      "An agent is defined by its ARCHITECTURE (can loop), not its OUTCOME (did loop). Autonomy defines the agent.",
      "Environment inspection via screenshots is what makes the Observe step possible in computer use agents.",
      "Building with Claude API course completed with 100% final assessment score."
    ],
    concepts: [
      { term: "Agent (Complete Definition)", explanation: "An agent is an LLM given three things: (1) a goal, (2) tools to use, and (3) autonomy to loop — meaning Claude decides what to do, when to do it, and when to stop. Like a contractor you hired: you say ‘renovate the bathroom,’ they decide which tools to use and keep working until done.", examRelevance: "Domain 1 (27%) — the exam will describe scenarios and ask whether something is an agent or a simple interaction. The litmus test: does Claude make autonomous decisions?" },
      { term: "LLM vs Agent", explanation: "The LLM (Opus, Sonnet) is the raw intelligence — the brain. By itself, it’s NOT an agent. It becomes an agent when wrapped in a framework that gives it a goal, tools, and a loop. Like the difference between a person’s intelligence and their job role.", examRelevance: "Domain 1 — understanding that the LLM is a component of an agent, not the agent itself." },
      { term: "Agent Framework", explanation: "A wrapper that turns the LLM brain into an agent by giving it a job, tools, and an autonomous loop. Claude Code = developer agent. Cowork = desktop agent. Chrome = browser agent. OpenClaw = open-source alternative.", examRelevance: "Domain 1 — the same LLM can serve different agent roles depending on the framework chosen." },
      { term: "Tool Use vs Agent", explanation: "Tool use: code controls the flow with predetermined steps, no loop. Agent: Claude controls the flow with a while True loop, deciding what to do next. The key question: WHO CONTROLS THE FLOW?", examRelevance: "Domain 1 — the exam will present scenarios where Claude uses tools and ask if it’s an agent. Check: does the architecture allow autonomous decisions?" },
      { term: "Agent Autonomy (Architecture vs Outcome)", explanation: "An agent is defined by its ARCHITECTURE, not its OUTCOME. If Claude has the ability to loop but stops after one pass (because the first result was sufficient), it was still an agent. The loop existed. Claude just chose not to use it.", examRelevance: "Domain 1 — critical nuance. The exam may present a scenario where an agent completes in one step and ask if it was an agent. Answer: yes, because autonomy existed." },
      { term: "while True Agent Loop", explanation: "The code pattern that creates an agent: while True → Claude thinks → check stop_reason → if end_turn: break → if tool_use: execute tool, feed result back → repeat. This same pattern powers Claude Code, Cowork, and Chrome under the hood.", examRelevance: "Domain 1 — this is the universal agent architecture pattern." },
      { term: "stop_reason in Agent Loop", explanation: "How Claude signals its decision: ‘end_turn’ = ‘I’m done, here’s your answer’ (triggers break/exit). ‘tool_use’ = ‘I need to use a tool’ (triggers tool execution and another loop).", examRelevance: "Domain 1 — stop_reason is the mechanism that makes autonomous decisions visible in code." },
      { term: "Environment Inspection", explanation: "Claude operates blindly — no eyes, no screen. In computer use (Cowork, Chrome), Claude acts, then receives a screenshot showing the result. This screenshot IS the Observe step. Like working in a dark room with a camera that flashes after every action.", examRelevance: "Domain 1 & 3 — environment inspection makes the Observe step possible for GUI-based agents." },
      { term: "Computer Use Tool", explanation: "A tool that lets Claude interact with a computer GUI: type text, click buttons, move the mouse. After each action, a screenshot is automatically returned.", examRelevance: "Domain 1 & 3 — understanding how Claude interacts with desktop and browser environments." },
      { term: "Reasonably Abstract Tools", explanation: "Tools should be general-purpose enough for flexibility but specific enough for reliability. Not ‘search_AI_news_march_2026’ (too specific) or ‘do_anything’ (too vague). The Goldilocks zone: ‘web_search’ + ‘fetch_article’.", examRelevance: "Domain 2 (18%) — tool schema design is directly tested. The exam asks you to evaluate tool designs." },
      { term: "Reliability-Economy Tradeoff", explanation: "Agents offer flexibility but cost more (multiple API calls per loop) and are less predictable (Claude might go off track). Workflows are cheaper and more reliable but less flexible. Most production systems use workflows with targeted agent steps.", examRelevance: "Domain 1 & 5 — ‘should this be an agent or workflow?’ is one of the most frequently tested questions." },
      { term: "Agentic RAG", explanation: "RAG inside an agent loop. Instead of one search-and-summarize pass, Claude autonomously decides what to search for, evaluates results, and searches again if needed.", examRelevance: "Domain 1 & 5 — combines agent patterns with context management strategies." },
      { term: "Agent Evaluation", explanation: "Monitoring, logging, and measuring whether an agent is performing well. How do you know if your agent is making good decisions?", examRelevance: "Domain 5 (15%) — observability and evaluation of agentic systems." }
    ],
    examInsights: [
      "The LLM is the brain, NOT the agent. An agent requires the brain + tools + an autonomous loop. The exam tests this distinction directly.",
      "Architecture defines the agent, not outcome. If the loop EXISTS but Claude didn’t use it, it’s still an agent. This is a subtle but frequently tested concept.",
      "The while True + stop_reason pattern is the universal agent loop. Same architecture powers Claude Code, Cowork, Chrome, and custom agents.",
      "Tool design abstraction level matters: too specific = inflexible, too abstract = unreliable. The exam tests your judgment on this spectrum.",
      "The reliability-economy tradeoff is the foundation for ‘agent vs workflow?’ questions. Default to workflows; use agents only where flexibility is genuinely needed.",
      "All five ‘additional topics’ from the course (agent orchestration, agent evaluation, agentic RAG, RAG evaluation, tool evaluation) are covered in the CCA study plan Weeks 2–6."
    ],
    selfAssessment: "Agent mental model fully locked in. Tool use vs agent distinction clear — architecture defines the agent. The while True + stop_reason code pattern understood. Environment inspection via screenshots understood. Reliability-economy tradeoff understood. Building with Claude API course COMPLETED with 100% final assessment. Ready for GitHub/Vercel deployment and domain-by-domain CCA study plan."
  }
];

const GLOSSARY = STUDY_NOTES.flatMap(s => s.concepts).reduce((acc, c) => {
  if (!acc.find(x => x.term === c.term)) acc.push(c);
  return acc;
}, []).sort((a, b) => a.term.localeCompare(b.term));

function App() {
  const [expandedSession, setExpandedSession] = useState(null);
  const [activeTab, setActiveTab] = useState("sessions");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = GLOSSARY.filter(
    g => g.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
         g.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: 760, margin: "0 auto", padding: "24px 16px", color: "#1e293b", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px", color: "#0f172a" }}>CCA Study Notes</span>
          <span style={{ fontSize: 11, fontWeight: 600, background: "#047857", color: "#fff", padding: "3px 10px", borderRadius: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>Cumulative</span>
        </div>
        <p style={{ fontSize: 14, color: "#475569", margin: 0 }}>
          {STUDY_NOTES.length} sessions · {GLOSSARY.length} glossary terms · Updated after each session
        </p>
      </div>

      {/* Tab Bar */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, background: "#f1f5f9", borderRadius: 10, padding: 4 }}>
        {["sessions", "glossary", "insights"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            flex: 1, padding: "10px 0", borderRadius: 8, border: "none", cursor: "pointer",
            fontSize: 13, fontWeight: 600, textTransform: "capitalize",
            background: activeTab === tab ? "#fff" : "transparent",
            color: activeTab === tab ? "#0f172a" : "#64748b",
            boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.15s ease"
          }}>
            {tab === "sessions" ? `Sessions (${STUDY_NOTES.length})` : tab === "glossary" ? `Glossary (${GLOSSARY.length})` : "Exam Insights"}
          </button>
        ))}
      </div>

      {/* Sessions Tab */}
      {activeTab === "sessions" && (
        <div>
          {STUDY_NOTES.map((session, idx) => {
            const isExpanded = expandedSession === idx;
            return (
              <div key={idx} style={{
                marginBottom: 10, borderRadius: 12, overflow: "hidden",
                border: `2px solid ${isExpanded ? "#4f46e5" : "#e2e8f0"}`,
                background: isExpanded ? "#f8fafc" : "#fff",
                transition: "all 0.2s ease"
              }}>
                <div onClick={() => setExpandedSession(isExpanded ? -1 : idx)}
                  style={{ padding: "14px 18px", cursor: "pointer", userSelect: "none" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: "#fff", background: "#4f46e5",
                          padding: "2px 8px", borderRadius: 5, fontFamily: "'JetBrains Mono', monospace"
                        }}>S{session.session}</span>
                        <span style={{ fontSize: 12, color: "#64748b" }}>{session.date}</span>
                        <span style={{ fontSize: 11, color: "#4f46e5", fontWeight: 600 }}>{session.duration}</span>
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{session.title}</div>
                    </div>
                    <span style={{
                      fontSize: 16, color: "#94a3b8",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.2s", display: "inline-block"
                    }}>▾</span>
                  </div>
                </div>

                {isExpanded && (
                  <div style={{ padding: "0 18px 18px" }}>
                    {/* Week Reference */}
                    <div style={{ fontSize: 12, color: "#7c3aed", fontWeight: 600, marginBottom: 12 }}>{session.weekRef}</div>

                    {/* Key Takeaways */}
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>Key Takeaways</div>
                      {session.keyTakeaways.map((t, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                          <span style={{ color: "#4f46e5", fontWeight: 700, minWidth: 16 }}>•</span>
                          <span style={{ fontSize: 13, color: "#334155", lineHeight: 1.6 }}>{t}</span>
                        </div>
                      ))}
                    </div>

                    {/* Concepts */}
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        Concepts ({session.concepts.length})
                      </div>
                      {session.concepts.map((c, i) => (
                        <div key={i} style={{
                          padding: 12, marginBottom: 8, borderRadius: 8,
                          background: "#fff", border: "1px solid #e2e8f0"
                        }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#4f46e5", marginBottom: 4 }}>{c.term}</div>
                          <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6, margin: "0 0 6px 0" }}>{c.explanation}</p>
                          <p style={{ fontSize: 12, color: "#7c3aed", fontWeight: 600, margin: 0 }}>Exam: {c.examRelevance}</p>
                        </div>
                      ))}
                    </div>

                    {/* Self Assessment */}
                    <div style={{
                      padding: 12, borderRadius: 8, background: "#ecfdf5", border: "1px solid #86efac"
                    }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#047857", marginBottom: 4, textTransform: "uppercase" }}>Self-Assessment</div>
                      <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6, margin: 0 }}>{session.selfAssessment}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Glossary Tab */}
      {activeTab === "glossary" && (
        <div>
          <input
            type="text"
            placeholder="Search glossary..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%", padding: "10px 14px", marginBottom: 16,
              border: "2px solid #e2e8f0", borderRadius: 10, fontSize: 14,
              color: "#0f172a", outline: "none", boxSizing: "border-box",
              fontFamily: "'DM Sans', sans-serif"
            }}
          />
          {filteredGlossary.map((g, i) => (
            <div key={i} style={{
              padding: 14, marginBottom: 8, borderRadius: 10,
              background: "#fff", border: "1px solid #e2e8f0"
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#4f46e5", marginBottom: 4 }}>{g.term}</div>
              <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6, margin: "0 0 6px 0" }}>{g.explanation}</p>
              <p style={{ fontSize: 12, color: "#7c3aed", fontWeight: 600, margin: 0 }}>Exam: {g.examRelevance}</p>
            </div>
          ))}
          {filteredGlossary.length === 0 && (
            <p style={{ textAlign: "center", color: "#94a3b8", padding: 40 }}>No matching terms found</p>
          )}
        </div>
      )}

      {/* Exam Insights Tab */}
      {activeTab === "insights" && (
        <div>
          {STUDY_NOTES.map((session, sIdx) => (
            session.examInsights.map((insight, iIdx) => (
              <div key={`${sIdx}-${iIdx}`} style={{
                padding: 16, marginBottom: 8, borderRadius: 10,
                background: "#fff", border: "1px solid #e2e8f0",
                display: "flex", gap: 12, alignItems: "flex-start"
              }}>
                <span style={{ fontSize: 18, minWidth: 24 }}>💡</span>
                <div>
                  <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.6, margin: 0 }}>{insight}</p>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: "6px 0 0 0" }}>From Session {session.session} — {session.date}</p>
                </div>
              </div>
            ))
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", padding: "28px 0 12px", fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>
        CCA Foundations Study Notes · Updated after each session
      </div>
    </div>
  );
}

export default App;
