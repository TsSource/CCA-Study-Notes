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
  },
  {
    session: 8,
    date: "March 29, 2026",
    title: "Domain 1 Deep Dive — Patterns, Multi-Agent Architecture & Error Handling",
    duration: "~3 hrs",
    weekRef: "Week 2 — Domain 1 (27%)",
    keyTakeaways: [
      "Practice exam baseline: 805/1000 (78%), passing but with low confidence — answers selected by elimination, not understanding.",
      "Pattern recognition framework: (1) Different inputs → different handlers = routing. (2) Steps depend on each other = chaining. (3) Tasks are independent = parallelization.",
      "Agents when Claude needs to make decisions along the way. Workflows when the steps are known in advance.",
      "Orchestrator = one boss stays in charge, collects and synthesizes results. Delegator = no boss, agents hand off entire conversation.",
      "Subagents NEVER communicate directly in an orchestrator pattern — everything flows through the orchestrator (centralized communication).",
      "Agent SDK provides four components: Agents (job descriptions), Handoffs (delegator pattern), Guardrails (safety checks), Tracing (flight recorder).",
      "Three error types: tool failure (code retries, Claude adapts), agent off track (max iterations, timeout), human-in-the-loop (approval gate for risky actions)."
    ],
    concepts: [
      { term: "Pattern Recognition Framework", explanation: "Three questions to identify the right pattern: (1) Does input need different handling? → Routing. (2) Do steps depend on each other? → Chaining. (3) Are tasks independent? → Parallelization. Then ask: does Claude need autonomy? If yes → agent. If predictable → workflow.", examRelevance: "Domain 1 (27%) — this framework is the foundation for answering every architecture question on the exam." },
      { term: "Routing Pattern (Exam Application)", explanation: "Classifier reads input, categorizes it, sends to the right specialist. Each specialist may have different tools. The classifier itself is typically a workflow (one decision, predictable). Example: customer emails classified as billing, technical, or general.", examRelevance: "Domain 1 — look for keywords like 'different types,' 'depending on category,' or 'various kinds of input.'" },
      { term: "Chaining Pattern (Exam Application)", explanation: "Output of step 1 feeds into step 2 sequentially. Each step must complete before the next starts. Example: extract terms → check compliance → generate report. All steps can be workflows if predictable.", examRelevance: "Domain 1 — look for 'first extract, then analyze,' 'based on the results of,' or sequential dependencies." },
      { term: "Parallelization Pattern (Exam Application)", explanation: "Multiple tasks run simultaneously from the same input. No dependencies between tasks. Example: generate ad copy, email subjects, and blog outline from the same product brief. All can be workflows.", examRelevance: "Domain 1 — look for 'simultaneously,' 'at the same time,' or independent tasks from same source." },
      { term: "Combined Patterns", explanation: "Real systems use multiple patterns together. Example: research agent (chain step 1) → three parallel content workflows (step 2). Or: three parallel tasks → chain to a final summary. The architect identifies the right pattern for each piece.", examRelevance: "Domain 1 — the exam loves combined patterns. Practice decomposing scenarios into their component patterns." },
      { term: "Orchestrator Multi-Agent Pattern", explanation: "One central agent stays in charge throughout. Breaks the goal into subtasks, assigns to specialist agents, collects results, synthesizes final output. Specialists only talk to the orchestrator, never to each other. Like a film director coordinating camera, actors, and sound.", examRelevance: "Domain 1 — use when results need to be combined, compared, or synthesized. The synthesis step requires a central coordinator." },
      { term: "Delegator (Handoff) Multi-Agent Pattern", explanation: "No central coordinator. One agent recognizes it's not the right fit and hands off the entire conversation to another specialist. The new agent takes full ownership. Like a hospital triage nurse handing you off to a cardiologist.", examRelevance: "Domain 1 — use when conversation moves between topics and only one specialist is needed at a time. No combining of results." },
      { term: "Centralized Communication Principle", explanation: "In an orchestrator pattern, subagents NEVER communicate directly with each other. All information flows through the orchestrator. Without this: orchestrator loses control, behavior becomes unpredictable, debugging becomes impossible.", examRelevance: "Domain 1 — the exam presents scenarios where subagents bypass the coordinator. The answer is always: this violates centralized communication." },
      { term: "Agent SDK: Agents Component", explanation: "A configured Claude instance with a defined system prompt, tools, and model. Like writing a job description — 'You are a billing specialist with access to payment tools, using Sonnet.'", examRelevance: "Domain 1 — understanding how agents are defined and configured in the SDK." },
      { term: "Agent SDK: Handoffs Component", explanation: "Built-in implementation of the delegator pattern. Define rules like 'if customer asks about claims, hand off to claims agent.' The SDK handles conversation transfer mechanics.", examRelevance: "Domain 1 — the SDK's handoff mechanism is the production implementation of the delegator pattern." },
      { term: "Agent SDK: Guardrails Component", explanation: "Safety checks that run alongside agents. Input guardrails check user messages before the agent sees them (prompt injection, unsupported languages). Output guardrails check responses before they reach the user (sensitive data, unauthorized actions).", examRelevance: "Domain 1 & 5 — guardrails are how architects build trust and safety. The exam tests what safeguards to add." },
      { term: "Agent SDK: Tracing Component", explanation: "Built-in logging that records every decision, tool call, handoff, and guardrail check during execution. Like a flight recorder on an airplane — essential for debugging when things go wrong.", examRelevance: "Domain 1 & 5 — tracing connects to monitoring and observability. You can't debug what you can't see." },
      { term: "SDK vs Custom Agent Loop", explanation: "Use the SDK when you need multiple agents, handoffs, guardrails, and tracing. Build your own loop when you have a single agent with a straightforward task. Principle: choose the simplest tool that meets requirements.", examRelevance: "Domain 1 — the exam tests whether you can choose the right level of tooling complexity." },
      { term: "Tool Failure Handling", explanation: "The tool itself fails (API down, timeout). Your code handles retries: simple retry, retry with backoff (increasing wait times), fallback to alternative tool. If all retries fail, tell Claude via is_error so it can adapt.", examRelevance: "Domain 1 & 2 — code handles retries, Claude handles adaptation. The exam tests this separation." },
      { term: "Agent Going Off Track", explanation: "Claude is running fine but making bad decisions. Safeguards: max iterations (hard cap on loop count), timeout (total elapsed time limit), output validation (check final answer before returning). Built into your code, not left to Claude.", examRelevance: "Domain 1 & 5 — these are reliability safeguards the architect must design into the system." },
      { term: "Human-in-the-Loop", explanation: "High-risk actions require human approval before execution. The check sits between Claude's tool request and code execution. Agent recommends, human approves. Required for: financial actions above threshold, irreversible actions, high-stakes decisions.", examRelevance: "Domain 1 & 5 — the exam tests when human-in-the-loop is necessary and where the approval gate sits in the code." },
      { term: "Max Iterations Pattern", explanation: "A loop_count variable inside the agent loop that increments with each trip around. When it hits the max (e.g., 7), the loop breaks. Prevents infinite loops and runaway API costs. Claude can still stop naturally with end_turn before hitting the limit.", examRelevance: "Domain 1 — understanding the code pattern for limiting agent loops is directly tested." }
    ],
    examInsights: [
      "Pattern recognition is the #1 skill for Domain 1. When you see a scenario, run the three questions: routing? chaining? parallelization? Then decide agent vs workflow for each piece.",
      "Default to workflows. Use agents only where flexibility is genuinely needed. The exam penalizes over-engineering with agents when workflows would suffice.",
      "Orchestrator vs delegator: if the task ends with 'put it all together' → orchestrator. If the task ends with 'pass it along' → delegator.",
      "Centralized communication is a directly tested concept. Subagents talking directly to each other is always wrong in an orchestrator pattern.",
      "The Agent SDK is for multi-agent production systems. A single agent with a simple loop doesn't need the SDK — that's over-engineering.",
      "Error handling has three layers: tool failure (code retries), agent off track (max iterations/timeout), human-in-the-loop (approval gate). Know where each sits in the code.",
      "Passing by elimination is not mastery. The exam will present answer choices designed to trap confident-sounding but wrong reasoning. Deep understanding prevents these traps."
    ],
    selfAssessment: "Pattern recognition framework internalized through multiple practice scenarios. Correctly identified routing, chaining, parallelization, and combined patterns with appropriate agent/workflow assignments. Orchestrator vs delegator clear with correct reasoning. Centralized communication understood. Agent SDK four components understood with use-case criteria. Three error handling types understood with code placement. Confidence significantly improved from start of session. Next: Exam Guide Domain 1 review, practice questions, then Customer Support Triage Agent project."
  },
  {
    session: 9,
    date: "March 30, 2026",
    title: "Domain 1 Exam Review, Practice Questions & Gap Remediation",
    duration: "~2.5 hrs",
    weekRef: "Week 2 — Domain 1 (27%)",
    keyTakeaways: [
      "Worked through 5 exam-style scenarios applying pattern recognition framework before practice questions.",
      "Practice questions: improved from 69% (11/16) to 100% (16/16) on second attempt.",
      "fork_session creates independent branches from a shared analysis baseline — the mechanism implementing orchestrator pattern in Claude Code.",
      "Subagents NEVER automatically share context. The coordinator must explicitly pass information between them.",
      "Hub-and-spoke applies to ALL communication: tasks, results, context, and errors all flow through coordinator.",
      "Tool block data shapes mastered: tool_use (Claude's request), tool_result (success/error response), is_error flag.",
      "Human-in-the-loop code gate sits between Claude's tool request and code execution. Claude never knows the gate exists.",
      "Programmatic gates are walls Claude cannot bypass. System prompt instructions are suggestions Claude can ignore."
    ],
    concepts: [
      { term: "fork_session", explanation: "Creates independent branches from a shared context baseline in Claude Code. Takes a snapshot of everything the agent has analyzed so far and creates copies for parallel exploration. Each branch works independently and reports back to the parent. The mechanism that implements the orchestrator pattern.", examRelevance: "Domain 1 & 3 — fork_session is the Claude Code implementation of the orchestrator pattern. Branches don't cross-communicate." },
      { term: "Context Sharing Rule", explanation: "Subagents do NOT automatically share context with each other. If subagent A produces results that subagent B needs, the coordinator must explicitly take A's output and include it in B's prompt. Never use shared memory objects — that bypasses the coordinator.", examRelevance: "Domain 1 — any answer involving subagents sharing anything directly (shared memory, concurrent state) is WRONG." },
      { term: "Hub-and-Spoke Principle", explanation: "In orchestrator patterns, ALL communication flows through the hub (coordinator). The spokes (subagents) never connect directly. Applies to task assignments, results, context passing, and error reporting. Violation signs: subagents calling each other's tools or sharing memory.", examRelevance: "Domain 1 — hub-and-spoke violation is a common wrong answer on the exam." },
      { term: "Tool Use Block (Data Shape)", explanation: "Claude's request to call a tool. Four pieces: type ('tool_use'), id (unique tracking number), name (which tool), input (parameters). The stop_reason will be 'tool_use' when this block appears.", examRelevance: "Domain 1 & 2 — recognize this data shape when reading agent loop code." },
      { term: "Tool Result Block (Data Shape)", explanation: "The result sent back to Claude after tool execution. Contains: type ('tool_result'), tool_use_id (must match original request's id), content (the result or error message). Optionally includes is_error: true for failures.", examRelevance: "Domain 1 & 2 — the tool_use_id matching is critical for parallel tool calls." },
      { term: "Complete Tool Cycle", explanation: "Claude requests tool → code checks for gates (human-in-the-loop) → code executes function → code packages result into tool_result with matching ID → code appends to conversation history → sends back to Claude → Claude reads and continues or stops.", examRelevance: "Domain 1 — every agent system follows this exact cycle." },
      { term: "Human-in-the-Loop Code Gate", explanation: "A programmatic check between Claude's tool request and code execution. If the action is high-risk (refund > $500, delete data), code pauses and asks a human. If approved, function executes. If denied, a tool_result telling Claude it was denied is sent back. The function NEVER executes without approval.", examRelevance: "Domain 1 & 5 — know the gate placement: after request, before execution." },
      { term: "Programmatic vs Prompt Guarantees", explanation: "System prompt instructions are suggestions Claude CAN ignore in edge cases. Code-level gates are walls Claude CANNOT bypass. For guaranteed behavior (identity verification before financial ops), always use programmatic prerequisites, not prompt instructions.", examRelevance: "Domain 1 & 5 — 'add it to the system prompt' is almost always the wrong answer for guaranteed behavior." },
      { term: "Routing vs Delegator Decision", explanation: "Routing: one-time classification at the start, fixed path for rest of conversation. Delegator: classification with ability to re-route when topics change mid-conversation. Key question: can the topic change? If yes → delegator.", examRelevance: "Domain 1 — the exam tests this distinction with chatbot scenarios." },
      { term: "Input Complexity Drives Architecture", explanation: "When input is highly variable and unpredictable (80-page contracts with varying formats), even simple-sounding tasks may require agent-level autonomy. The complexity of the INPUT drives the decision, not just the task description.", examRelevance: "Domain 1 — don't assume a task is simple just because the description sounds simple. Check the input variability." },
      { term: "Simplest Architecture Principle", explanation: "The exam rewards the simplest architecture that meets all requirements. Don't escalate to agents when workflows work. Don't use orchestrator when parallelization suffices. Over-engineering is penalized.", examRelevance: "Domain 1 — if two answers both work, the simpler one is correct." },
      { term: "Architect's Role in Code", explanation: "The architect designs rules ('refund > $500 needs approval') and directs Claude Code to implement them. Reviews the output code to verify: Is the gate in the right place? Does the denial path send proper tool_result? Does the threshold match? The building inspector, not the carpenter.", examRelevance: "All domains — the CCA tests design decisions and code reading, not code writing." }
    ],
    examInsights: [
      "Sequential dependencies + sensitive final action = chaining + human-in-the-loop. This pattern appears frequently.",
      "Parallelization becomes orchestrator only when subtasks require agent-level autonomy. If tasks are straightforward generation, stay with parallelization.",
      "fork_session is the mechanism, orchestrator is the concept. Know both and how they connect.",
      "Any exam answer involving subagents sharing state directly (shared memory, concurrent access) is wrong. Everything flows through the coordinator.",
      "stop_reason: tool_use = continue (Claude needs something). end_turn = stop (Claude is done). Don't confuse them under pressure.",
      "The exam tests code reading, not code writing. Recognize where gates sit, what tool blocks contain, and how the agent loop flows."
    ],
    selfAssessment: "Domain 1 practice questions improved from 69% to 100%. Key gaps filled: fork_session mechanics, context sharing rules, hub-and-spoke applied to data flow. Tool block data shapes understood. Human-in-the-loop code pattern mastered with correct gate placement. Routing vs delegator distinction clear. Code reading fluency improving. Ready for Domain 1 build projects: Customer Support Triage Agent and Professional README."
  },
  {
    session: 10,
    date: "March 31, 2026",
    title: "Domain 4 Deep Dive — Prompt Engineering, Structured Output & Gap Remediation",
    duration: "~3 hrs",
    weekRef: "Week 3 — Domain 4 (20%)",
    keyTakeaways: [
      "XML tags create clear boundaries between prompt sections. Use when prompts have multiple distinct sections; skip for simple prompts.",
      "Few-shot examples teach Claude WHAT good output looks like. Chain-of-thought teaches HOW to reason. Combine for complex judgment tasks.",
      "Four structured output techniques ranked weakest to strongest: prompt instruction → explicit format → assistant prefill → tool schema.",
      "Prompt chaining: each step receives ONLY what it needs from the previous step, not the full context. Controls what Claude can see.",
      "tool_choice has three settings: 'auto' (Claude decides, might skip tools), 'any' (must use a tool), specific name (must use that exact tool).",
      "Required schema fields force hallucination when data is missing. Only require fields guaranteed to exist in every source document.",
      "Structured data output (JSON for code) → tool schema. Formatted text output (for humans) → few-shot examples.",
      "Semantic validation catches meaning errors in valid JSON. Retry-with-feedback sends error descriptions back to Claude for correction.",
      "Self-review bias: same instance can't effectively review its own work. Use separate instances with isolated context.",
      "Domain 1 build project completed: Customer Support Triage Agent (routing workflow) running with 91% test accuracy.",
      "Practice questions: 58% (7/12) → 100% (12/12) after gap remediation."
    ],
    concepts: [
      { term: "XML Tags in Prompts (Implementation)", explanation: "Tags like <instructions>, <context>, <examples>, <output_format>, <constraints> create clear boundaries. Tag names are descriptive for readability — Claude doesn't care if it's <banana> or <context>, but architects need maintainable prompts. Use tags when multiple sections exist; skip for simple single-task prompts.", examRelevance: "Domain 4 (20%) — XML organization is tested. Know when tags help vs when they're over-engineering." },
      { term: "Few-Shot Examples (Implementation)", explanation: "Input/output pairs showing Claude what correct results look like. Zero-shot = no examples (simple tasks). One-shot = one example (format teaching). Few-shot = 3-5 examples (complex classification, edge cases). More examples = more tokens = higher cost. The architect decides how many are worth it.", examRelevance: "Domain 4 — few-shot fixes edge case accuracy. Chain-of-thought fixes reasoning errors. Know which problem you're solving." },
      { term: "Few-Shot Generalization", explanation: "Claude extracts PATTERNS from examples, not memorization. 3-5 examples covering major format categories is enough for Claude to generalize to unseen variations. You don't need to cover every possible case — just the major types. Pre-processing documents to uniform format is almost always the wrong answer.", examRelevance: "Domain 4 — 'varied formats' or 'inconsistent structures' in a question = few-shot examples, not pre-processing." },
      { term: "Chain-of-Thought Prompting (Implementation)", explanation: "Asking Claude to reason step-by-step before answering. Use when Claude makes logical errors on multi-step problems (skipping conditions, jumping to conclusions). Add 'Think through each requirement step by step before giving your answer.' Can combine with few-shot by showing examples that include reasoning steps.", examRelevance: "Domain 4 — chain-of-thought fixes reasoning errors. Few-shot fixes pattern recognition errors. Combined = most powerful for complex judgment." },
      { term: "Structured Output Technique Ranking", explanation: "Weakest to strongest: (1) Prompt instruction ('return JSON') — suggestion Claude might ignore. (2) Explicit format with example — stronger but not guaranteed. (3) Assistant prefill (start response with '{') — forces JSON start. (4) Tool schema with required fields — guaranteed structure, typed fields, enum constraints. Pick based on how critical format reliability is.", examRelevance: "Domain 4 — know all four levels and when each is appropriate. Tool schema for machine-parsed data, few-shot for human-readable formats." },
      { term: "tool_choice Parameter", explanation: "Controls whether Claude uses defined tools. 'auto' = Claude decides, might skip tools entirely and return plain text. 'any' = Claude must use one of the available tools. {'type': 'tool', 'name': 'specific_tool'} = must use that exact tool. For guaranteed structured output, NEVER use 'auto' — use 'any' or specific tool name.", examRelevance: "Domain 4 — directly tested. 'auto' is the trap answer for guaranteed output questions." },
      { term: "Schema-Induced Hallucination", explanation: "When a field is marked 'required' in a tool schema but the source data doesn't contain that information, Claude will INVENT a plausible value to satisfy the requirement. Claude won't throw an error — it fabricates data. Fix: make fields optional when source data might not contain them. Only require fields genuinely guaranteed to exist in every source.", examRelevance: "Domain 4 — required vs optional field design is tested. Required = guaranteed hallucination when data is absent." },
      { term: "Structured Data vs Formatted Text", explanation: "Structured data = JSON for code to parse programmatically. Use tool schema. Formatted text = specific layout for humans to read (e.g., 'file:line | description | severity'). Use few-shot examples. The technique depends on WHO consumes the output — code or humans.", examRelevance: "Domain 4 — read questions carefully to determine if output is for code consumption or human reading." },
      { term: "Prompt Chaining (Implementation)", explanation: "Breaking multi-step tasks into separate API calls where each step's output feeds the next. Critical rule: pass ONLY what each step needs, not full context. Three options: pass everything (wasteful), pass only relevant pieces (usually best), pass a summary. Removing unnecessary context prevents Claude from referencing wrong information.", examRelevance: "Domain 4 — 'Claude is including information it shouldn't' almost always means too much context is being passed between chain steps." },
      { term: "Semantic Validation", explanation: "Checking whether data MEANS the right thing, not just whether it PARSES correctly. Valid JSON with swapped subtotal/total is a semantic error, not a syntax error. Implement cross-field validation in code (e.g., line items should sum to subtotal, subtotal + tax should equal total). JSON parser catches syntax; your code catches semantics.", examRelevance: "Domain 4 & 5 — semantic validation is a reliability pattern. Know the difference between syntax and semantic errors." },
      { term: "Retry-with-Error-Feedback", explanation: "When semantic validation fails, send the error description back to Claude with the original document: 'You extracted subtotal as $500 and total as $400, but subtotal cannot exceed total. Please re-examine.' Claude reads the feedback and often self-corrects. If same error persists after 5 retries, the information is likely absent from the source.", examRelevance: "Domain 4 & 5 — retry-with-feedback is a reliability pattern. Know when retries are fundamentally ineffective (missing source data)." },
      { term: "Self-Review Bias", explanation: "When Claude generates code and then reviews it in the same conversation, the generation reasoning is still in context. Claude is biased toward defending its own decisions. Fix: use a SECOND independent Claude instance with clean context that receives only the code, no generation history. Same principle as subagent context isolation.", examRelevance: "Domain 4 — generation and evaluation should be separate instances with separate contexts." },
      { term: "Enum + Other Pattern", explanation: "Schema design for categories that might expand. Use an enum field with known values plus an 'other' option, paired with a separate 'other_detail' string field. Maintains structure for known categories while handling unexpected ones.", examRelevance: "Domain 4 — schema design pattern for evolving classification systems." },
      { term: "False Positive Management", explanation: "When a system generates too many false alerts, users start ignoring ALL alerts — including real ones. The immediate fix is to disable or suppress the noisy category to restore user trust, then improve the detection prompt separately. Triage the crisis before optimizing accuracy.", examRelevance: "Domain 4 — practical engineering judgment. Noise destroys trust; removing noise is the first priority." },
      { term: "Message Batches API", explanation: "Anthropic's API for processing many requests in bulk. Key limitations: no multi-turn tool calling within a single request, and processing window up to 24 hours with no guaranteed latency. Unsuitable for real-time or interactive workflows.", examRelevance: "Domain 4 — technical recall. Batch API is for bulk processing, not interactive or real-time use cases." }
    ],
    examInsights: [
      "tool_choice 'auto' is the trap answer for guaranteed structured output. Use 'any' or a specific tool name.",
      "Required fields + missing source data = hallucination. Make fields optional when data might not exist.",
      "Structured data (for code) → tool schema. Formatted text (for humans) → few-shot examples. Read questions carefully.",
      "Few-shot examples generalize — 3-5 covering major categories is enough. Pre-processing is almost always wrong.",
      "Semantic errors are valid JSON with wrong meaning. Syntax errors are broken JSON. Different problems, different fixes.",
      "Same instance can't review its own work effectively. Generation and evaluation need separate contexts.",
      "Teaching depth matters: concepts alone aren't enough. Implementation details, configurations, and gotchas are what the exam actually tests."
    ],
    selfAssessment: "Domain 4 practice questions improved from 58% to 100%. Six critical gaps filled: tool_choice settings, schema-induced hallucination, structured data vs formatted text, few-shot generalization, semantic validation with retry-with-feedback, and self-review bias. Teaching approach adjusted — now going 1-2 levels deeper into implementation details. Domain 1 build project (Customer Support Triage Agent) completed and running with 91% accuracy. Ready for Domain 3: Claude Code Config & Workflows."
  },
  {
    session: 11,
    date: "April 1, 2026",
    title: "Domain 3 Deep Dive — Claude Code Config, Workflows & CI/CD",
    duration: "~3.5 hrs",
    weekRef: "Week 4 — Domain 3 (20%)",
    keyTakeaways: [
      "CLAUDE.md hierarchy: user-level (weakest) → project-level → local overrides (strongest). More specific scope wins.",
      "CLAUDE.md is a persistent instruction set, not a memory. Claude Code reads it fresh every session — it doesn't record past interactions.",
      "Slash commands are reusable prompts in .claude/commands/ (project) or ~/.claude/commands/ (user). Triggered manually with /name.",
      "Hooks fire automatically at lifecycle events: PreToolCall (prevention gate) and PostToolCall (validation check).",
      "Permission models: allowlist (safest, least privilege), denylist (permissive), approval flows (human-in-the-loop). Allowlist for production/headless.",
      "CI/CD headless mode: -p flag for non-interactive execution. --output-format json for pipeline-parseable output.",
      "fork_session implementation: parent's allowedTools must include 'Task'. Branches get copied context, not shared. Complete isolation after fork.",
      "/compact compresses bloated context. Scratchpad files persist findings to disk. Subagents offload research-heavy tasks to fresh context windows.",
      "Domain 4 build project completed: Structured Data Extraction Pipeline with semantic validation, cross-check, and oscillation detection.",
      "Practice questions: 10/12 (83%) on first attempt — best first-attempt score across all domains. Only 2 technical recall misses.",
      "CI/CD pipeline fully understood: push → GitHub Actions triggers → cloud machine installs Claude Code → API key from secrets → headless review → findings posted as PR comments."
    ],
    concepts: [
      { term: "CLAUDE.md (Persistent Instruction Set)", explanation: "A markdown file Claude Code reads automatically on every session start. NOT a memory of past interactions — it's a briefing document that sits on the desk. Contains project architecture, coding standards, rules, and constraints. Claude reads it fresh every time.", examRelevance: "Domain 3 (20%) — CLAUDE.md configuration is a major exam topic. Know the three scopes and hierarchy." },
      { term: "CLAUDE.md Scope Hierarchy", explanation: "Three levels from weakest to strongest: User-level (~/.claude/CLAUDE.md) = personal preferences across all projects. Project-level (./CLAUDE.md) = team standards for this project. Local (.claude.local.md) = personal overrides, not committed to Git. More specific scope always wins.", examRelevance: "Domain 3 — the exam tests which scope wins in conflict scenarios. Project overrides user. Local overrides both." },
      { term: "User-Level CLAUDE.md", explanation: "Lives at ~/.claude/CLAUDE.md. Applies to every project. Contains personal preferences: preferred language, coding style, default tools. Weakest scope — overridden by project and local.", examRelevance: "Domain 3 — user-level is personal and NOT shared via version control. If team standards are here, only that user gets them." },
      { term: "Project-Level CLAUDE.md", explanation: "Lives at ./CLAUDE.md in the project root. Applies to everyone working on this project. Contains team coding standards, architecture, tech stack, testing requirements. Committed to Git so all team members share it.", examRelevance: "Domain 3 — this is where team standards belong. The exam tests whether you know to put shared rules at project level." },
      { term: "Local Override CLAUDE.md", explanation: "Lives at .claude.local.md. Personal customization that overrides project standards without affecting teammates. Goes in .gitignore. Use for: current focus area, local environment differences, temporary instructions.", examRelevance: "Domain 3 — 'customize without affecting the team' = local override." },
      { term: "Slash Commands", explanation: "Reusable prompts stored as markdown files. Project commands in .claude/commands/ (shared via Git). User commands in ~/.claude/commands/ (personal). Triggered by typing /commandname. Like speed dial — one word triggers a complex set of instructions.", examRelevance: "Domain 3 — slash commands are for recurring maintenance tasks, not initial development. Know where they live (project vs user directories)." },
      { term: "Hooks (PreToolCall and PostToolCall)", explanation: "Code that runs automatically at lifecycle events. PreToolCall fires BEFORE an action (prevention gate — like human-in-the-loop). PostToolCall fires AFTER an action but before results are processed (validation check — like semantic validation). Hooks are automatic; slash commands are manual.", examRelevance: "Domain 3 — PreToolCall = prevention (stop bad actions). PostToolCall = validation (check results). Know which fits which scenario." },
      { term: "PreToolCall Hook", explanation: "Fires before Claude Code executes a tool. Can block or modify the action. Same position as human-in-the-loop gate. Use for: preventing modification of protected files, requiring approval for destructive actions, blocking unauthorized tool use.", examRelevance: "Domain 3 — 'prevent action before it happens' = PreToolCall." },
      { term: "PostToolCall Hook", explanation: "Fires after a tool returns results but before Claude processes them. Can validate, transform, or reject results. Use for: auto-linting generated code, format checking, data validation before downstream use.", examRelevance: "Domain 3 — 'check output after production' = PostToolCall." },
      { term: "Allowlist Permission Model", explanation: "Explicitly defines what Claude Code CAN do. Everything else is blocked by default. Follows least privilege principle. Safest option for production and headless mode. Forgetting to add something = blocked (safe failure).", examRelevance: "Domain 3 — production and headless environments = allowlist. The exam penalizes denylist for sensitive contexts." },
      { term: "Denylist Permission Model", explanation: "Explicitly defines what Claude Code CANNOT do. Everything else is allowed. More permissive, suitable for development. Forgetting to add something = allowed (unsafe failure).", examRelevance: "Domain 3 — development environments only. Never for production or headless." },
      { term: "Approval Flows", explanation: "Claude Code can attempt anything, but specific actions pause for human confirmation. Requires a human present — unsuitable for headless mode. Middle ground between allowlist and denylist.", examRelevance: "Domain 3 — approval flows need a human. Headless mode has no human. Therefore: headless = allowlist, never approval flows." },
      { term: "CI/CD Pipeline (Implementation)", explanation: "Continuous Integration/Continuous Deployment. Automated testing and deployment triggered by code pushes. GitHub Actions reads a YAML config file (.github/workflows/) that defines steps to run. Like a factory assembly line — CI is quality control, CD is shipping.", examRelevance: "Domain 3 — Claude Code integration into CI/CD pipelines is specifically tested. Know the -p flag and permission requirements." },
      { term: "Headless Mode (-p flag)", explanation: "Claude Code running without human interaction using the -p (or --print) flag. Takes a single prompt, executes, outputs results, and exits. Used in CI/CD pipelines. Requires tighter permissions because no human can intervene.", examRelevance: "Domain 3 — the -p flag is directly tested. More autonomy = tighter permissions." },
      { term: "--output-format json", explanation: "CLI flag that makes Claude Code output structured JSON instead of human-readable text. Used in CI/CD so pipeline scripts can parse findings programmatically and post them as PR comments.", examRelevance: "Domain 3 — technical recall. Know this flag exists for pipeline integration." },
      { term: "/compact (Context Compression)", explanation: "Claude Code command that compresses conversation history by summarizing. Keeps key findings and decisions, discards verbose back-and-forth. Use when Claude starts giving generic 'typical patterns' answers instead of referencing specific code.", examRelevance: "Domain 3 — context degradation symptom = generic answers. Solution = /compact, scratchpad files, or subagents." },
      { term: "Scratchpad Files", explanation: "Regular files (like SCRATCHPAD.md) where Claude Code writes key findings during analysis. Persist to disk, survive context compression and session restarts. Like a detective's notebook — even with no memory of yesterday, the notes are on the desk.", examRelevance: "Domain 3 — scratchpad files solve cross-session persistence. /compact solves within-session bloat." },
      { term: "Subagent Spawning (Context Offloading)", explanation: "Forking a focused research task into a fresh context window instead of continuing in a bloated main session. The subagent reads files, analyzes, writes findings to a file, and exits. Main session reads the summary file. Keeps the main context clean.", examRelevance: "Domain 3 — subagents solve 'next task is research-heavy and would flood context.' Not for autonomous decision-making — for focused analysis." },
      { term: "fork_session (Implementation Details)", explanation: "Claude Code feature that creates independent branches from shared context. Parent's allowedTools must include 'Task'. Context is COPIED to each branch, not shared. Branches are completely isolated after forking. Results must be explicitly collected by parent.", examRelevance: "Domain 3 — allowedTools must include 'Task' to spawn branches. This was tested in Domain 1 practice questions." },
      { term: "/memory Command", explanation: "Shows which CLAUDE.md files, rules files, and configuration are currently loaded for the session. Debugging tool for inconsistent behavior — first step is checking what's actually loaded.", examRelevance: "Domain 3 — technical recall. Use /memory to diagnose why rules apply inconsistently." },
      { term: ".claude/rules/ Directory", explanation: "Directory for splitting a large CLAUDE.md into focused, topic-specific files (testing.md, api-conventions.md, security.md). Claude Code auto-discovers all files in this directory. YAML frontmatter with glob patterns can target rules to specific file types.", examRelevance: "Domain 3 — when CLAUDE.md grows too large, split into rules/. Prevents context degradation in configuration." },
      { term: "YAML Frontmatter Glob Patterns", explanation: "Metadata at the top of rule files (between --- markers) that specifies which files the rules apply to. Example: globs: ['*.test.tsx'] means the rule only activates for test files. Enables different conventions for different parts of a codebase.", examRelevance: "Domain 3 — glob patterns enable conditional rule application based on file paths." },
      { term: "Plan Mode", explanation: "Claude Code mode for exploring a codebase, understanding dependencies, and designing an approach before making changes. Used for large restructuring tasks where understanding the system first prevents costly mistakes.", examRelevance: "Domain 3 — plan before act for complex refactoring. The exam tests knowing when to plan vs when to execute." },
      { term: "PR (Pull Request) Comments", explanation: "Feedback posted on specific lines of code within a GitHub Pull Request. In CI/CD, Claude Code's findings are parsed from JSON and posted as comments on the exact lines where issues were found. Developers see the feedback in context.", examRelevance: "Domain 3 — understanding the CI/CD output flow: Claude reviews → JSON output → parsed → posted as PR line comments." },
      { term: "GitHub Actions", explanation: "GitHub's built-in CI/CD automation system. Reads YAML config files from .github/workflows/ in your repo. Triggers automatically on events (push, PR). Spins up temporary cloud machines to run your pipeline steps.", examRelevance: "Domain 3 — the platform that runs Claude Code in headless mode. Config is YAML, machines are temporary, API key stored as GitHub Secret." },
      { term: "GitHub Secrets", explanation: "Encrypted storage for sensitive values (API keys) in GitHub repository settings. Pipeline steps can access them as environment variables, but nobody can read the actual values. How the ANTHROPIC_API_KEY gets into the CI/CD pipeline securely.", examRelevance: "Domain 3 — API keys in CI/CD must use secrets, never hardcoded in config files." },
      { term: "Custom MCP Server (Implementation)", explanation: "A Python file using FastMCP that wraps an external app's API calls in MCP format. Three ingredients needed: API documentation (what endpoints exist), API key (authentication), MCP server code (wraps the calls). Any app with an API can have a custom MCP server. No API = no MCP server possible.", examRelevance: "Domain 2 & 3 — know what's needed to build a custom MCP server and when it's possible vs impossible." },
      { term: "Decorator Pattern (@mcp.tool)", explanation: "A label (@) placed above a function that registers it with a system. @mcp.tool() registers the function as a tool Claude can discover and call. @mcp.resource() registers data. @mcp.prompt() registers a template. The decorator auto-generates the JSON schema from the function signature and Field descriptions.", examRelevance: "Domain 2 — decorators eliminate manual schema writing. Know all three: @mcp.tool, @mcp.resource, @mcp.prompt." },
      { term: "Skills vs Slash Commands vs MCP", explanation: "Skills = platform-provided capability bundles (instructions + scripts, managed by platform). Slash commands = reusable prompts you wrote (text only, your words). MCP servers = custom tool integrations you build and maintain (full code). Skills: platform provides. Slash commands and MCP: you build.", examRelevance: "Domain 3 — know what you build vs what the platform provides. The exam focuses on what the architect controls." },
      { term: "YAML Configuration", explanation: "A text format for structured data using indentation instead of brackets. Key-value pairs, lists with dashes. Used by GitHub Actions for CI/CD pipeline configuration. Same data as JSON, different syntax. You don't write YAML manually — Claude Code generates it.", examRelevance: "Domain 3 — recognize YAML format in CI/CD pipeline questions." }
    ],
    examInsights: [
      "CLAUDE.md scope: user (weakest) → project → local (strongest). 'Customize without affecting team' = local override.",
      "PreToolCall = prevention (before action). PostToolCall = validation (after action). Same as human-in-the-loop vs semantic validation.",
      "More autonomy requires tighter permissions. Headless mode = allowlist. Interactive mode can use approval flows.",
      "Context degradation solutions: /compact (compress), scratchpad (persist to disk), subagent (offload to fresh context). Each solves a different problem.",
      "fork_session requires 'Task' in allowedTools. Branches are isolated copies, not shared references.",
      "CI/CD with Claude Code: API key in GitHub Secrets, -p flag for headless, --output-format json for pipeline parsing. The cloud machine is temporary.",
      "/memory command shows loaded configuration. First debugging step for inconsistent rule application."
    ],
    selfAssessment: "Domain 3 practice questions: 83% (10/12) on first attempt — best first-attempt score. Only 2 technical recall misses (/memory command and --output-format json flag). All architectural concepts applied correctly: scope hierarchy, hook types, permission models, CI/CD flow, fork_session mechanics. Domain 4 build project (Structured Data Extraction Pipeline) designed and built from scratch with tool schemas, semantic validation, cross-check with separate instance, retry-with-feedback, and oscillation detection. Full CI/CD pipeline flow understood at implementation level. Ready for Domain 3 build project."
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
