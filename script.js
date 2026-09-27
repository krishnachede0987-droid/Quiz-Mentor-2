/* script.js */
/* =====================================================
   DATA & TOPICS (20+ QUESTIONS PER SECTION)
====================================================== */
const topics = [
  {
    icon: "💼",
    title: "CSE Interview Prep",
    desc: "Core CS concepts, data structures, algorithms, system design, and OOP frequently asked in technical interviews.",
    level: "Advanced",
    time: "20 min",
    questions: [
      ["What is the average time complexity of searching in a Balanced Binary Search Tree (AVL / Red-Black)?", "O(log n)", "O(1)", "O(n)", "O(n log n)"],
      ["Which data structure operates on a Last-In, First-Out (LIFO) basis?", "Stack", "Queue", "Array", "Linked List"],
      ["What is the primary difference between a process and a thread?", "Processes execute in separate memory spaces; threads share the memory space of their parent process", "Threads are independent applications, while processes are functions", "Processes are handled by the GPU, while threads run on the CPU", "Threads do not require CPU scheduling"],
      ["Which Object-Oriented Programming (OOP) pillar allows a subclass to provide a specific implementation of a method declared in a superclass?", "Polymorphism (Method Overriding)", "Encapsulation", "Abstraction", "Multiple Inheritance"],
      ["In relational databases, what does the ACID property 'Atomicity' guarantee?", "All operations in a transaction succeed completely or none take effect", "Data remains consistent across system crashes", "Transactions execute concurrently without interference", "Committed data is permanently written to disk"],
      ["Which sorting algorithm has a worst-case time complexity of O(n^2) but an average-case of O(n log n)?", "Quick Sort", "Merge Sort", "Heap Sort", "Counting Sort"],
      ["What type of memory management issue occurs when dynamically allocated memory is no longer reachable but not deallocated?", "Memory Leak", "Buffer Overflow", "Stack Overflow", "Segmentation Fault"],
      ["Which design pattern ensures that a class has only one single instance and provides a global point of access to it?", "Singleton Pattern", "Factory Pattern", "Observer Pattern", "Strategy Pattern"],
      ["What is a deadlock in Operating Systems?", "A situation where two or more processes are blocked forever, waiting for resources held by each other", "A process exceeding its allocated RAM limit", "An infinite loop in a multi-threaded program", "A hardware fault in the CPU cache"],
      ["In computer networking, which TCP/IP layer handles end-to-end reliability and flow control?", "Transport Layer (TCP)", "Network Layer (IP)", "Data Link Layer", "Application Layer"],
      ["What is the time complexity of looking up a key in an optimized Hash Map (on average)?", "O(1)", "O(log n)", "O(n)", "O(n^2)"],
      ["Which dynamic programming approach builds solutions from the bottom up using tabulations?", "Iterative Tabulation", "Recursive Memoization", "Greedy Choice", "Divide and Conquer"],
      ["What is the main advantage of a Linked List over an Array?", "Dynamic size and efficient insertions/deletions at known nodes without shifting", "Random access by index in O(1) time", "Better cache locality and CPU cache performance", "Lower memory overhead per element"],
      ["What does the 'Liskov Substitution Principle' in SOLID guidelines state?", "Subtypes must be substitutable for their base types without altering program correctness", "Classes should be open for modification but closed for extension", "Interfaces must contain only one method", "High-level modules should depend on concrete implementations"],
      ["Which HTTP request method is idempotent, meaning multiple identical requests have the same effect as a single request?", "GET / PUT / DELETE", "POST only", "PATCH only", "POST and CONNECT"],
      ["What is the difference between SQL and NoSQL databases?", "SQL databases are relational and structured with rigid schemas; NoSQL databases are non-relational and horizontally scalable", "SQL is faster than NoSQL for un-structured document storage", "NoSQL cannot handle transactions", "SQL databases do not support primary keys"],
      ["In Graph Theory, which algorithm finds the shortest path from a single source node to all other nodes in a weighted graph with non-negative edge weights?", "Dijkstra's Algorithm", "Breadth-First Search (BFS)", "Kruskal's Algorithm", "Depth-First Search (DFS)"],
      ["What is the main function of an Index in a database table?", "Speeds up data retrieval operations at the cost of additional storage and write speed", "Enforces foreign key relationships between tables", "Compresses stored table rows", "Encrypts sensitive column data"],
      ["What is the time complexity to find the maximum element in a Max-Heap?", "O(1)", "O(log n)", "O(n)", "O(n log n)"],
      ["What is Virtual Memory in modern Operating Systems?", "A memory management technique that creates an abstraction of large main memory using physical RAM and secondary storage", "GPU memory reserved for graphic rendering", "Cloud-based remote server storage", "Cache memory built inside the CPU core"]
    ]
  },
  {
    icon: "🏗️",
    title: "HTML Fundamentals",
    desc: "Elements, semantics, forms, attributes and document structure.",
    level: "Beginner",
    time: "15 min",
    questions: [
      ["Which element is used for the largest heading?", "<h1>", "<heading>", "<h6>", "<head>"],
      ["Which attribute provides alternative text for an image?", "alt", "src", "title", "href"],
      ["Which element represents navigation links?", "<nav>", "<navigate>", "<links>", "<menu-nav>"],
      ["Which input type is used for email addresses?", "email", "mail", "text-email", "address"],
      ["Which HTML attribute specifies that an input field must be filled out before submitting?", "required", "validate", "placeholder", "important"],
      ["Which tag is used to define an unordered list?", "<ul>", "<ol>", "<li>", "<list>"],
      ["Which semantic element should be used for content that is tangentially related to the main content?", "<aside>", "<sidebar>", "<section>", "<div>"],
      ["What is the correct HTML element for playing audio files?", "<audio>", "<sound>", "<mp3>", "<music>"],
      ["Which attribute opens a linked document in a new tab or window?", "target=\"_blank\"", "href=\"_blank\"", "rel=\"newtab\"", "window=\"new\""],
      ["Which tag is used to embed an inline frame or external content?", "<iframe>", "<frame>", "<embed-page>", "<object-frame>"],
      ["What is the correct element for inserting a line break?", "<br>", "<break>", "<lb>", "<line>"],
      ["Which attribute in a form specifies where to send the form-data when submitted?", "action", "method", "target", "submit-to"],
      ["Which HTML5 element represents self-contained, independent content like a blog post?", "<article>", "<section>", "<main>", "<div>"],
      ["What is the purpose of the <head> element?", "It contains metadata about the HTML document", "It contains the visible page title and logo", "It defines the main body content", "It forces the browser to reload"],
      ["Which element defines important text that should be displayed in bold?", "<strong>", "<b>", "<important>", "<em_bold>"],
      ["Which attribute is used to group related form controls together?", "<fieldset>", "<group>", "<form-group>", "<section>"],
      ["What does the 'lang' attribute in the <html> tag declare?", "The primary language of the text content", "The programming language of scripts", "The keyboard layout expected", "The character encoding type"],
      ["Which tag specifies the character encoding for an HTML document?", "<meta charset=\"UTF-8\">", "<encoding utf-8>", "<script charset=\"8\">", "<head encoding=\"utf-8\">"],
      ["Which HTML tag is used to create a dropdown selection list?", "<select>", "<dropdown>", "<input type=\"list\">", "<optionlist>"],
      ["Which attribute defines an inline CSS style for an element?", "style", "css", "class", "theme"]
    ]
  },
  {
    icon: "🎨",
    title: "CSS Essentials",
    desc: "Selectors, box model, cascade, positioning and responsive styling.",
    level: "Beginner",
    time: "15 min",
    questions: [
      ["Which property changes text color?", "color", "font-color", "text-color", "foreground"],
      ["What does display: flex enable?", "Flexbox layout", "Grid only", "Animations", "Media queries"],
      ["Which unit is relative to the root font size?", "rem", "px", "vh", "pt"],
      ["Which property controls spacing inside an element?", "padding", "margin", "gap-only", "space"],
      ["Which CSS property controls the stacking order of elements?", "z-index", "stack-order", "layer", "depth"],
      ["How do you select an element with id 'header' in CSS?", "#header", ".header", "header", "*header"],
      ["Which property turns an element invisible while keeping its space in the layout?", "visibility: hidden", "display: none", "opacity: 0.5", "overflow: hidden"],
      ["What does the 'box-sizing: border-box' property do?", "Includes padding and border in the total width and height", "Adds margin to total width", "Excludes borders from width", "Fixes background images"],
      ["Which value of position places an element relative to the viewport?", "fixed", "absolute", "relative", "sticky"],
      ["Which pseudo-class applies styles when a user hovers over an element?", ":hover", ":focus", ":active", ":visited"],
      ["Which CSS property is used to change font family?", "font-family", "font-type", "text-style", "typeface"],
      ["What is the default value of the position property?", "static", "relative", "absolute", "fixed"],
      ["How do you select all <p> elements inside a <div> element?", "div p", "div + p", "div > p only", "div.p"],
      ["Which property is used to round the corners of an element's border?", "border-radius", "corner-radius", "border-curve", "box-radius"],
      ["What does media query '@media (max-width: 768px)' target?", "Screens with a width of 768px or smaller", "Screens larger than 768px", "Only print media", "Retina displays only"],
      ["Which CSS property transforms text to uppercase?", "text-transform", "font-case", "text-style", "text-capitalize"],
      ["Which value of display completely removes an element from the document layout?", "none", "hidden", "block", "inline-block"],
      ["Which shorthand property sets top, right, bottom, and left margins in order?", "margin: 10px 20px 30px 40px;", "margin: 10px 30px 20px 40px;", "margin: left right top bottom;", "margin-all: 10px 20px 30px 40px;"],
      ["Which property defines background color for an element?", "background-color", "bg-color", "color-bg", "surface-color"],
      ["Which rule is used to import external CSS stylesheets?", "@import", "#import", "<link-css>", "use-style"]
    ]
  },
  {
    icon: "📐",
    title: "Flexbox & Grid",
    desc: "Modern layouts, alignment, tracks, gaps and responsive interfaces.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which property controls the main axis in flexbox?", "flex-direction", "flex-axis", "main-direction", "align-axis"],
      ["CSS Grid columns are commonly defined with which property?", "grid-template-columns", "grid-columns", "columns-grid", "template-columns"],
      ["What does justify-content control in a flex row?", "Main-axis alignment", "Cross-axis alignment", "Font size", "Element height"],
      ["Which creates a gap between grid/flex items?", "gap", "spacing", "item-gap", "gutter-only"],
      ["Which align property controls alignment along the cross-axis in flex containers?", "align-items", "justify-items", "align-content", "cross-align"],
      ["What flex-wrap value forces flex items into a single line?", "nowrap", "wrap", "wrap-reverse", "inline"],
      ["Which CSS Grid track unit represents a fraction of the available space?", "fr", "auto", "flex", "%"],
      ["What shorthand property combines flex-grow, flex-shrink, and flex-basis?", "flex", "flex-flow", "flex-layout", "flex-item"],
      ["How do you center an item along both axes in flexbox?", "justify-content: center; align-items: center;", "align-content: center;", "text-align: center; margin: auto;", "display: center;"],
      ["Which CSS Grid property specifies a grid item's start position in columns?", "grid-column-start", "grid-start-col", "column-begin", "grid-position"],
      ["Which property allows flex items to shrink if necessary?", "flex-shrink", "flex-grow", "flex-basis", "flex-compact"],
      ["What does grid-template-areas allow developers to do?", "Name grid sections for easy structural positioning", "Automatically add gap spacing", "Define color schemes for grid cells", "Specify grid container animations"],
      ["Which value of flex-direction reverses the item ordering vertically?", "column-reverse", "row-reverse", "column-flip", "vertical-reverse"],
      ["What function repeats grid tracks without writing each explicitly?", "repeat()", "loop()", "grid-repeat()", "track-copy()"],
      ["Which grid property is shorthand for row-gap and column-gap?", "gap", "grid-spacing", "track-gap", "cell-padding"],
      ["Which flex item property overrides align-items for an individual item?", "align-self", "align-item", "item-align", "self-justify"],
      ["What is the initial default value of flex-grow on flex items?", "0", "1", "auto", "100%"],
      ["Which property defines the initial size of a flex item before space distribution?", "flex-basis", "flex-width", "flex-size", "initial-basis"],
      ["What shorthand sets flex-direction and flex-wrap simultaneously?", "flex-flow", "flex-container", "flex-direction-wrap", "flex-mode"],
      ["What grid template syntax creates auto-fitting flexible responsive grids?", "repeat(auto-fit, minmax(200px, 1fr))", "repeat(auto, 200px)", "grid-fit(200px, flex)", "auto-grid(200px)"]
    ]
  },
  {
    icon: "⚡",
    title: "JavaScript Core",
    desc: "Variables, functions, arrays, objects, scope and modern syntax.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which keyword creates a block-scoped variable that can be reassigned?", "let", "var", "const", "define"],
      ["What does === compare?", "Value and type", "Only value", "Only type", "References only"],
      ["Which method adds an item to the end of an array?", "push()", "append()", "add()", "insertEnd()"],
      ["What is an arrow function syntax?", "() => {}", "function => {}", "-> function()", "func() ->"],
      ["Which array method creates a new array by applying a transformation function to each element?", "map()", "forEach()", "filter()", "reduce()"],
      ["What data type does typeof NaN return?", "number", "nan", "undefined", "object"],
      ["Which keyword prevents re-assignment of a variable?", "const", "let", "var", "immutable"],
      ["What does the filter() array method return?", "A new array containing elements that pass a test condition", "The first element matching a condition", "A boolean flag", "The original modified array"],
      ["What will '2' + 2 evaluate to in JavaScript?", "'22'", "4", "NaN", "TypeError"],
      ["Which method converts a JSON string into a JavaScript object?", "JSON.parse()", "JSON.stringify()", "JSON.toObject()", "Object.parse()"],
      ["What does the 'this' keyword refer to inside a standard function called on an object?", "The object that invoked the function", "The global window always", "The function body", "undefined"],
      ["Which keyword is used to declare asynchronous functions?", "async", "await", "promise", "defer"],
      ["What is the purpose of the Array.prototype.reduce() method?", "Executes a reducer function to compute a single output value", "Reduces array length by half", "Filters out negative values", "Sorts items in descending order"],
      ["Which operator is used for template literal string interpolation?", "` ${variable} `", "' + variable + '", "\" ${variable} \"", "str(variable)"],
      ["What is the result of Boolean('') in JavaScript?", "false", "true", "null", "undefined"],
      ["Which method removes the last element from an array?", "pop()", "shift()", "slice()", "splice()"],
      ["What handles resolved values of a Promise instance?", ".then()", ".catch()", ".finally()", ".resolve()"],
      ["What statement exits a loop prematurely?", "break", "continue", "return", "stop"],
      ["Which concept allows inner functions to access variables from an outer enclosing scope?", "Closure", "Hoisting", "Recursion", "Inheritance"],
      ["What is the result of typeof null?", "object", "null", "undefined", "boolean"]
    ]
  },
  {
    icon: "⚛️",
    title: "React Basics",
    desc: "Components, props, state, hooks and rendering concepts.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["What is a React component?", "A reusable UI building block", "A database", "A CSS selector", "A browser"],
      ["Which hook manages local state?", "useState", "useLocal", "useValue", "stateHook"],
      ["Props are primarily used to...", "Pass data to components", "Change CSS globally", "Create databases", "Start servers"],
      ["React lists commonly require which prop?", "key", "idOnly", "listKeyOnly", "indexOnly"],
      ["Which hook is used to handle side effects in functional components?", "useEffect", "useSideEffect", "useAction", "useFetch"],
      ["What syntax extension allows writing HTML-like code inside JavaScript for React?", "JSX", "TSX-HTML", "ReactHTML", "JS-XML"],
      ["What happens when state updates in a React component?", "The component re-renders", "The whole webpage reloads", "The state reverts back", "Props are destroyed"],
      ["How do you pass a variable named 'userName' as a prop to child component <Header />?", "<Header userName={userName} />", "<Header props=userName />", "<Header :userName=\"userName\" />", "<Header bind:userName />"],
      ["Which hook returns a memoized callback function?", "useCallback", "useMemo", "useRef", "useEffect"],
      ["What is the virtual DOM in React?", "A lightweight in-memory representation of the real DOM", "A physical browser plugin", "Direct HTML DOM reference", "A server database model"],
      ["Which hook provides direct access to DOM nodes or persists mutable values without re-rendering?", "useRef", "useState", "useContext", "useNode"],
      ["What rule must be followed when invoking React Hooks?", "Hooks can only be called at the top level of React function components", "Hooks can be called inside nested loops", "Hooks can be declared in regular JS functions", "Hooks are only available in Class components"],
      ["How do you render content conditionally in JSX?", "Ternary operator or short-circuit &&", "if-else inside JSX tag", "v-if directive", "ng-if tag"],
      ["Which hook is used to consume context values provided by React Context?", "useContext", "useProvider", "useStore", "useGlobalState"],
      ["What is the purpose of React.memo()?", "Prevents unnecessary re-renders of functional components when props don't change", "Memoizes database calls", "Caches HTTP requests", "Automates state binding"],
      ["What is the return value of the useState hook?", "An array containing current state and an updater function", "A single state object", "A setter method only", "A promise"],
      ["In React, what replaces standard HTML 'class' attributes on JSX elements?", "className", "class", "elementClass", "cssClass"],
      ["What component type wraps child elements to pass down shared state without prop drilling?", "Context Provider", "Redux Store", "State Wrapper", "Props Container"],
      ["When does the cleanup function in useEffect execute?", "Before the component unmounts or before re-running the effect", "Only on initial mount", "When state is created", "On every DOM interaction"],
      ["What is the main advantage of key props in React lists?", "Helps React identify which items have changed, been added, or removed for optimal diffing", "Generates CSS IDs", "Orders items numerically", "Enforces unique styles"]
    ]
  },
  {
    icon: "🌐",
    title: "Web APIs",
    desc: "HTTP, REST, JSON, fetch, status codes and browser APIs.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which method is commonly used to retrieve data?", "GET", "PULL", "FETCH", "READ"],
      ["What does HTTP status 404 mean?", "Not Found", "Unauthorized", "Server Error", "Created"],
      ["JSON stands for...", "JavaScript Object Notation", "Java Source Object Network", "JavaScript Online Nodes", "Joined Script Object Names"],
      ["Which API is commonly used for HTTP requests in modern browsers?", "fetch()", "requestWeb()", "httpCall()", "browserGet()"],
      ["Which HTTP status code signifies successful creation of a resource?", "201 Created", "200 OK", "301 Moved", "204 No Content"],
      ["Which HTTP verb is typically used to update an existing resource completely?", "PUT", "GET", "POST", "OPTION"],
      ["Which Browser API stores key-value pairs with no expiration time?", "localStorage", "sessionStorage", "cookieStorage", "indexedDB-only"],
      ["What does CORS stand for?", "Cross-Origin Resource Sharing", "Cross-Object Request Server", "Core Origin Response System", "Client Origin Resource Safety"],
      ["Which format is most widely used for data exchange in RESTful APIs?", "JSON", "XML", "CSV", "YAML"],
      ["What HTTP response status code series represents server-side errors?", "500-599", "400-499", "300-399", "200-299"],
      ["What is the primary function of the fetch API return value?", "It returns a Promise resolving to a Response object", "It returns raw JSON directly", "It returns HTML text", "It blocks thread until request finishes"],
      ["Which header field is used to pass JWT bearer tokens for authentication?", "Authorization", "Content-Type", "Accept", "X-Auth-Key"],
      ["How do you store data in localStorage?", "localStorage.setItem('key', 'value')", "localStorage.add('key', 'value')", "localStorage.save('key', 'value')", "localStorage.put('key', 'value')"],
      ["Which Web API enables real-time, two-way interactive communication between client and server?", "WebSocket API", "Fetch API", "REST API", "GraphQL API"],
      ["What does the HTTP header 'Content-Type: application/json' signal?", "The request/response payload is formatted as JSON", "The server requires JSON auth", "The response is encrypted", "The response is raw HTML"],
      ["Which browser storage API clears stored data automatically when the browser tab closes?", "sessionStorage", "localStorage", "Cookies", "Cache API"],
      ["Which HTTP method is used to remove a specified resource?", "DELETE", "REMOVE", "DROP", "CANCEL"],
      ["What does status code 401 Unauthorized mean?", "Authentication is required and has failed or not been provided", "The page is forbidden", "The endpoint was moved", "The server timed out"],
      ["Which browser API provides geolocation access to user device coordinates?", "navigator.geolocation", "window.location.geo", "document.getGPS()", "device.location"],
      ["What is the purpose of URLSearchParams API?", "Provides utility methods to work with query string parameters of a URL", "Parses JSON parameters", "Encodes passwords", "Creates relative links"]
    ]
  },
  {
    icon: "♿",
    title: "Accessibility",
    desc: "Semantic HTML, ARIA, keyboard navigation and inclusive UX.",
    level: "Beginner",
    time: "15 min",
    questions: [
      ["What is the purpose of alt text?", "Describe meaningful images", "Decorate images", "Load images faster", "Resize images"],
      ["A semantic button should generally be represented by...", "<button>", "<div role=none>", "<click>", "<action>"],
      ["Keyboard users commonly navigate interactive elements with...", "Tab", "Shift only", "Space only", "Arrow only"],
      ["ARIA stands for...", "Accessible Rich Internet Applications", "Advanced Responsive Internet Attributes", "Accessible React Interface API", "Application Rich Interface Access"],
      ["Which attribute should be added to purely decorative images so screen readers skip them?", "alt=\"\"", "role=\"important\"", "aria-label=\"image\"", "hidden=\"false\""],
      ["What is the minimum WCAG AA visual contrast ratio recommended for standard body text?", "4.5:1", "3:1", "7:1", "2:1"],
      ["Which ARIA attribute indicates that an element opens a popup menu or collapsible panel?", "aria-expanded", "aria-haspopup", "aria-open", "aria-controls"],
      ["What is the main accessibility issue with removing outline styles on focused interactive elements?", "Keyboard users cannot visually track focus position", "Mouse users cannot click elements", "Screen readers stop reading text", "Color contrast drops"],
      ["Which HTML element provides a caption and grouping label for form fields wrapped in <fieldset>?", "<legend>", "<label>", "<caption>", "<header>"],
      ["What property forces screen readers to announce immediate dynamic page changes?", "aria-live=\"assertive\"", "aria-atomic=\"false\"", "role=\"alert-none\"", "aria-dynamic=\"fast\""],
      ["Why should interactive elements never rely solely on color to convey state?", "Users with color vision deficiencies may miss important status information", "Color slows down web performance", "Screen readers crash", "HTML validators fail"],
      ["What attribute links a form input field directly to its textual descriptor element <label>?", "for (or matching id)", "name", "aria-descriptor", "input-id"],
      ["What key enables keyboard users to trigger a highlighted focused button?", "Enter or Space", "Tab", "Escape", "Control"],
      ["Which ARIA role explicitly denotes a site-wide primary navigation region?", "role=\"navigation\"", "role=\"region\"", "role=\"banner\"", "role=\"main\""],
      ["What is a skip link on a webpage?", "A link at the top allowing keyboard users to jump directly to main content", "A link to skip ads", "A link that skips validation", "A hidden link for web crawlers"],
      ["What attribute specifies the reading order when non-standard tab sequences are needed?", "tabindex", "nav-index", "focus-order", "aria-tab"],
      ["What value of tabindex removes an element from sequential keyboard navigation while remaining programmatically focusable?", "-1", "0", "1", "99"],
      ["Which HTML attribute provides a clear invisible label for screen readers when visible text isn't present?", "aria-label", "title", "alt-text", "reader-text"],
      ["Which heading hierarchy best practice should be followed for web accessibility?", "Use headings sequentially (<h1> followed by <h2>) without skipping levels", "Use headings purely based on font size needs", "Only use <h1> tags everywhere", "Skip levels freely"],
      ["Which HTML element should wrap the main content area of a document for semantic landmarks?", "<main>", "<section id=\"main\">", "<div class=\"main\">", "<body-content>"]
    ]
  },
  {
    icon: "🔧",
    title: "Git & Dev Tools",
    desc: "Version control, branches, commits, debugging and developer workflow.",
    level: "Beginner",
    time: "15 min",
    questions: [
      ["Which command creates a Git repository?", "git init", "git start", "git create", "git repo"],
      ["Which command records staged changes?", "git commit", "git save", "git push", "git record"],
      ["Which command downloads remote changes?", "git pull", "git download", "git sync-only", "git fetchall"],
      ["Browser DevTools can be used to...", "Inspect and debug webpages", "Only edit databases", "Host websites", "Compile Python"],
      ["Which command stages all modified and new files for the next commit?", "git add .", "git stage --all", "git include *", "git commit --all"],
      ["Which command shows the current state of the working directory and staging area?", "git status", "git log", "git check", "git info"],
      ["Which Git command creates a new branch named 'feature'?", "git branch feature", "git make feature", "git create feature", "git checkout -new feature"],
      ["How do you switch to an existing branch named 'dev'?", "git checkout dev (or git switch dev)", "git branch dev", "git move dev", "git goto dev"],
      ["Which command merges changes from branch 'feature' into the current active branch?", "git merge feature", "git combine feature", "git pull feature", "git join feature"],
      ["What is the main purpose of a .gitignore file?", "Lists files and directories that Git should ignore and not track", "Deletes secret files", "Encrypts repository passwords", "Stores build output"],
      ["Which Git command displays the commit history log?", "git log", "git history", "git commits", "git list"],
      ["Which command uploads local commits to a remote repository branch?", "git push", "git send", "git upload", "git sync"],
      ["What DevTools panel is primarily used to inspect network requests and status codes?", "Network panel", "Console panel", "Elements panel", "Sources panel"],
      ["Which console command prints error messages with distinct formatting in browser DevTools?", "console.error()", "console.log()", "console.warn()", "console.info()"],
      ["What DevTools panel allows developers to pause JS execution using breakpoints?", "Sources panel", "Application panel", "Elements panel", "Performance panel"],
      ["What Git command un-stages a staged file while keeping working directory changes intact?", "git restore --staged <file>", "git remove <file>", "git delete <file>", "git drop <file>"],
      ["Which command creates and switches to a new branch simultaneously?", "git checkout -b <branch-name>", "git switch --create-new", "git branch -s", "git make-branch"],
      ["What command clones an existing Git repository from GitHub to local disk?", "git clone <url>", "git get <url>", "git copy <url>", "git pull-repo <url>"],
      ["What DevTools tab inspects local storage, cookies, and session data?", "Application panel", "Memory panel", "Security panel", "Elements panel"],
      ["Which command temporarily stashes uncommitted working directory changes?", "git stash", "git hide", "git hold", "git pause"]
    ]
  },
  {
    icon: "☕",
    title: "Java & OOPs",
    desc: "Classes, inheritance, JVM memory, multi-threading, collections, and polymorphism.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which keyword prevents a class from being inherited in Java?", "final", "static", "abstract", "private"],
      ["What is the root class of the Java class hierarchy?", "java.lang.Object", "java.lang.Class", "java.util.Root", "java.lang.System"],
      ["Which memory area in JVM stores class structures and static variables?", "Method Area / Metaspace", "Stack Memory", "Heap Memory", "PC Register"],
      ["What happens when an exception is thrown inside a try block with a finally block?", "The finally block always executes whether an exception is handled or not", "The finally block executes only if no exception occurs", "The program terminates immediately before executing finally", "The finally block replaces the catch block"],
      ["Which Java interface represents a collection that contains no duplicate elements?", "Set", "List", "Queue", "Map"],
      ["What is the default value of a local object reference variable declared inside a method?", "It has no default value and causes a compilation error if used uninitialized", "null", "undefined", "0"],
      ["Which feature allows multiple methods in the same class to share the same name with different parameters?", "Method Overloading", "Method Overriding", "Dynamic Binding", "Encapsulation"],
      ["Which thread method causes the currently executing thread to temporarily pause and allow other threads to execute?", "Thread.yield()", "Thread.sleep()", "Thread.wait()", "Thread.join()"],
      ["What is the difference between String, StringBuilder, and StringBuffer?", "String is immutable; StringBuilder is mutable and non-thread-safe; StringBuffer is mutable and thread-safe", "String is mutable; StringBuilder is immutable; StringBuffer is thread-safe", "StringBuilder and StringBuffer are both immutable", "String is thread-safe while StringBuffer is not"],
      ["Which collection implementation provides O(1) time complexity for insertion and lookup operations on average?", "HashMap", "ArrayList", "LinkedList", "TreeMap"],
      ["Which keyword is used by a class to implement an interface?", "implements", "extends", "inherits", "using"],
      ["What is garbage collection in Java?", "An automatic memory management process that reclaims unreferenced heap memory", "A compiler tool that removes unused source code", "A thread that cleans up stack frames", "A process that deletes temp files from disk"],
      ["Which access modifier makes a member accessible only within its own package and subclasses?", "protected", "private", "public", "default (package-private)"],
      ["What does the 'super' keyword refer to in Java?", "The immediate parent class object instance", "The top-level root Object class", "The active running thread", "The current class instance"],
      ["Which functional interface method signature in Java 8 supports Lambda expressions with one argument and no return value?", "Consumer<T>", "Supplier<T>", "Function<T, R>", "Predicate<T>"],
      ["What is the purpose of the 'transient' keyword in Java?", "Prevents a field from being serialized during object persistence", "Makes a field thread-safe", "Declares a field as read-only", "Forces garbage collection on the field"],
      ["Which exception is thrown when attempting to access an array element with an invalid index?", "ArrayIndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException", "IndexUnderflowException"],
      ["What does marker interface mean in Java?", "An interface with no fields or methods (e.g., Serializable, Cloneable)", "An interface with only default methods", "An interface used for design patterns", "An abstract class with public methods"],
      ["Which mechanism achieves runtime dynamic polymorphism in Java?", "Method Overriding", "Method Overloading", "Static Methods", "Interface Constant Binding"],
      ["What is the time complexity of searching for an element in a Red-Black tree backed TreeMap?", "O(log n)", "O(1)", "O(n)", "O(n log n)"]
    ]
  },
  {
    icon: "🐍",
    title: "Python Fundamentals",
    desc: "Data structures, list comprehensions, decorators, generators, and OOP in Python.",
    level: "Beginner",
    time: "15 min",
    questions: [
      ["Which built-in Python data type is immutable?", "Tuple", "List", "Dictionary", "Set"],
      ["What is the output of bool([]) in Python?", "False", "True", "None", "ValueError"],
      ["Which syntax creates a list comprehension that squares all even numbers from 0 to 4?", "[x**2 for x in range(5) if x % 2 == 0]", "[x^2 for x in range(5) where x%2==0]", "(x**2 for x in range(5))", "[x*2 for x in range(5)]"],
      ["What does the `pass` statement do in Python?", "Acts as a null placeholder statement where syntax requires code", "Exits the current loop", "Skips to the next iteration of a loop", "Returns None from a function"],
      ["What is the function of a Python decorator?", "A function that takes another function as an argument and extends its behavior without modifying it", "A class attribute that styles console output", "A built-in module for GUI elements", "A syntax highlighter tool"],
      ["Which keyword defines a generator function in Python?", "yield", "return", "generate", "async"],
      ["How is memory managed in Python?", "Automatic reference counting combined with a cyclical garbage collector", "Manual allocation via malloc() and free()", "Pure stack allocation without heap usage", "Explicit call to delete object"],
      ["What does `*args` inside a Python function signature allow?", "Passing a variable number of non-keyword positional arguments", "Passing a variable number of keyword arguments", "Unpacking dictionary values", "Enforcing strict type hints"],
      ["What will `print('Python'[::-1])` output?", "nohtyP", "Python", "P", "SyntaxError"],
      ["What is GIL (Global Interpreter Lock) in CPython?", "A mutex that prevents multiple native threads from executing Python bytecodes concurrently", "A security lock for files", "A package management restriction", "A memory leak detector"],
      ["Which method appends all elements from another iterable to a list?", "extend()", "append()", "push()", "insert()"],
      ["What does `is` operator compare in Python?", "Object identity (memory address reference)", "Value equality", "Data type only", "Length of objects"],
      ["Which dictionary method safely retrieves a key value without raising a KeyError if missing?", "get()", "fetch()", "popkey()", "lookup()"],
      ["What is the purpose of `__init__` method in Python classes?", "Serves as the constructor method initialized when a new instance is created", "Deletes an object instance from memory", "Converts an instance to a string representation", "Defines static methods"],
      ["How do you open a file for reading in Python so it automatically closes after execution?", "with open('file.txt', 'r') as f:", "f = open('file.txt'); defer f.close()", "file f = read('file.txt')", "open('file.txt').autoClose()"],
      ["What is the difference between deepcopy() and copy() in the `copy` module?", "deepcopy recursively copies nested objects; copy creates a shallow reference copy of container", "copy handles dictionary types while deepcopy handles lists", "deepcopy converts objects to JSON format", "copy allocates GPU RAM"],
      ["Which built-in function returns an enumerate object yielding index-value pairs?", "enumerate()", "zip()", "map()", "range()"],
      ["What operator performs integer/floor division in Python?", "//", "/", "%", "**"],
      ["What data structure does `set()` represent in Python?", "An unordered collection of unique elements", "An ordered key-value map", "A fixed-size array", "A LIFO queue"],
      ["What is the output of `type((1,))` in Python?", "<class 'tuple'>", "<class 'int'>", "<class 'list'>", "<class 'set'>"]
    ]
  },
  {
    icon: "🗄️",
    title: "DBMS & SQL",
    desc: "Relational database design, SQL queries, normalization, indexing, and transactions.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which SQL clause filters aggregation groups after a GROUP BY clause?", "HAVING", "WHERE", "ORDER BY", "FILTER"],
      ["What normal form eliminates partial dependency on a composite primary key?", "Second Normal Form (2NF)", "First Normal Form (1NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
      ["Which SQL JOIN returns all rows from the left table and matching rows from the right table?", "LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
      ["What does the 'C' stand for in database ACID properties?", "Consistency", "Concurrency", "Coherency", "Completeness"],
      ["Which constraint ensures that all values in a column are distinct and not null?", "PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "CHECK"],
      ["What type of command is `DROP TABLE` in SQL categorization?", "DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"],
      ["Which SQL command removes all rows from a table without logging individual row deletions?", "TRUNCATE", "DELETE", "REMOVE", "DROP"],
      ["What is a Foreign Key in relational databases?", "A field in one table that uniquely identifies a row in another table", "A primary key from an external database instance", "An encrypted column key", "A key generated by auto-increment"],
      ["Which aggregate function calculates the total count of non-null rows in a column?", "COUNT()", "SUM()", "TOTAL()", "AVG()"],
      ["What normal form eliminates transitive functional dependencies?", "Third Normal Form (3NF)", "2NF", "1NF", "4NF"],
      ["Which SQL statement modifies existing records in a table?", "UPDATE", "ALTER", "CHANGE", "MODIFY"],
      ["What is a Database View?", "A virtual table based on the result set of an SQL statement", "A physical copy of a table stored on secondary storage", "An index configuration file", "A database backup snapshot"],
      ["What does a clustered index do to table data storage?", "Physically re-orders how table rows are stored on disk based on the index key", "Creates an external lookup file keeping physical storage untouched", "Encrypts index entries", "Stores data in RAM memory only"],
      ["Which SQL operator filters results matching a specified pattern using wildcards like % and _?", "LIKE", "IN", "BETWEEN", "EXISTS"],
      ["What is a dirty read phenomenon in database transactions?", "Reading uncommitted data modified by another concurrent transaction", "Reading deleted records from disk cache", "Failing to read primary key indexes", "Reading corrupted data packets"],
      ["Which command rolls back transaction changes to a specific checkpoint?", "SAVEPOINT / ROLLBACK TO", "RESTORE", "UNDO", "REVERT"],
      ["What is the primary function of the `UNION ALL` operator?", "Combines results of two SELECT queries including duplicate rows", "Combines results excluding duplicate rows", "Performs cross-join on tables", "Intersects common rows"],
      ["Which SQL command assigns database access privileges to a user?", "GRANT", "REVOKE", "ALLOW", "PERMIT"],
      ["What problem does database Indexing solve?", "Accelerates data retrieval speeds at the trade-off of slightly slower writes", "Reduces total storage footprint", "Eliminates database deadlocks", "Normalizes table schemas"],
      ["What does subquery uncorrelated mean?", "A subquery that can be executed independently of the outer query", "A subquery referencing outer table alias in its WHERE clause", "A query executed on a distant server", "A join query"]
    ]
  },
  {
    icon: "💻",
    title: "Operating Systems",
    desc: "Process management, CPU scheduling, virtual memory, deadlocks, and IPC.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which CPU scheduling algorithm gives every process a fixed time slice (quantum) in cyclic order?", "Round Robin (RR)", "First-Come First-Served (FCFS)", "Shortest Job First (SJF)", "Priority Scheduling"],
      ["What condition is NOT required for a deadlock to occur (Coffman conditions)?", "Preemption allowed", "Mutual Exclusion", "Hold and Wait", "Circular Wait"],
      ["What is Thrashing in Operating Systems?", "Excessive page swapping between RAM and disk, causing severe CPU performance degradation", "A hardware crash of disk drivers", "High CPU utilization due to infinite loops", "Termination of daemon processes"],
      ["What is a Semaphore?", "A synchronization variable used to control access to shared resources by multiple processes", "A CPU register storing memory addresses", "An interrupt handler routine", "A system call for file creation"],
      ["Which page replacement algorithm suffers from Belady's Anomaly?", "FIFO (First-In, First-Out)", "LRU (Least Recently Used)", "Optimal Page Replacement", "LFU (Least Frequently Used)"],
      ["What is the state transition when a process in the Running state receives an I/O request?", "Running to Blocked/Waiting", "Running to Ready", "Running to Terminated", "Running to New"],
      ["What is Context Switching?", "Saving the state of an active thread/process and restoring another process state for CPU execution", "Switching user accounts in OS", "Moving files from RAM to hard disk", "Changing screen resolutions"],
      ["What is a Zombie Process?", "A process that has finished execution but still has an entry in the process table for its parent to read termination status", "A process running with root privileges", "A process consuming 100% CPU", "An orphaned background process"],
      ["Which memory allocation scheme suffers from internal fragmentation?", "Paging", "Segmentation", "Dynamic Partitioning", "Virtual Swapping"],
      ["What is an OS System Call?", "A programmatic mechanism for an application to request services from the OS kernel", "A call between two user apps", "An interrupt generated by keyboard typing", "A remote network request"],
      ["Which system structure stores attributes of a running process (PID, register state, memory limit)?", "PCB (Process Control Block)", "TCB (Table Control Block)", "Inode Table", "Kernel Dispatcher"],
      ["What is the purpose of Translation Lookaside Buffer (TLB)?", "A hardware CPU cache that speeds up virtual-to-physical address translation", "A buffer storing incoming network packets", "A disk controller cache", "An OS scheduler queue"],
      ["Which condition defines a Critical Section in concurrent programming?", "A code segment where shared resources are accessed that must not be executed concurrently by multiple processes", "A section of memory reserved for kernel drivers", "A critical error handler block", "A CPU booting procedure"],
      ["What is Mutex short for?", "Mutual Exclusion Object", "Multiple Execution", "Memory Unit Extension", "Multi-Thread Exchange"],
      ["What is the primary difference between Paging and Segmentation?", "Paging divides memory into fixed-size physical blocks; Segmentation divides memory into variable logical segments", "Paging is hardware-only while Segmentation is software-only", "Paging causes external fragmentation while Segmentation causes internal fragmentation", "Segmentation does not use virtual memory"],
      ["Which scheduling algorithm yields the minimum theoretical average waiting time for a given set of processes?", "Shortest Job First (SJF)", "First-Come First-Served (FCFS)", "Round Robin", "Priority Scheduling"],
      ["What is an Interrupt Vector?", "An array of memory addresses holding pointer locations to specific Interrupt Service Routines (ISRs)", "A vector graphics buffer", "A CPU queue for system calls", "A hardware fault counter"],
      ["What is Spooling in operating systems?", "Buffering data for asynchronous processing by slow devices like printers", "A method for thread pooling", "Compressing files on hard disk", "Swapping pages out to swap space"],
      ["What happens during a Kernel Panic?", "The operating system encounters an unrecoverable internal error and halts execution to prevent data loss", "A single user application closes unexpectedly", "The CPU switches to low power mode", "A process enters zombie state"],
      ["Which file allocation method supports fast random access without experiencing external fragmentation?", "Indexed Allocation (Inodes)", "Contiguous Allocation", "Linked Allocation", "Fat32 Allocation"]
    ]
  },
  {
    icon: "🌐",
    title: "Computer Networks",
    desc: "OSI model layers, TCP/IP, routing algorithms, DNS, HTTP/S, and IP addressing.",
    level: "Intermediate",
    time: "15 min",
    questions: [
      ["Which OSI layer is responsible for end-to-end reliability, flow control, and error recovery?", "Transport Layer", "Network Layer", "Data Link Layer", "Session Layer"],
      ["What is the default port number used by secure HTTPS traffic?", "443", "80", "22", "8080"],
      ["Which protocol resolves an IP address to its corresponding MAC address on a local network?", "ARP (Address Resolution Protocol)", "DHCP", "DNS", "ICMP"],
      ["What subnet mask corresponds to a standard CIDR block notation of /24?", "255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.128"],
      ["In the TCP 3-way handshake, what sequence of flag packets is exchanged to establish a connection?", "SYN -> SYN-ACK -> ACK", "ACK -> SYN -> ACK-SYN", "SYN -> ACK -> FIN", "CONNECT -> ACCEPT -> READY"],
      ["Which layer of the OSI model handles data encryption, compression, and format conversion?", "Presentation Layer", "Application Layer", "Session Layer", "Data Link Layer"],
      ["What is the primary function of DNS (Domain Name System)?", "Translates human-readable domain names into numerical IP addresses", "Assigns dynamic IP addresses to devices", "Routes packets across autonomous systems", "Secures web socket connections"],
      ["Which protocol operates statelessly over UDP without guaranteeing delivery order?", "UDP (User Datagram Protocol)", "TCP", "SCTP", "SSH"],
      ["What device operates at Layer 2 (Data Link) of the OSI model and forwards frames using MAC addresses?", "Switch", "Router", "Hub", "Repeater"],
      ["Which routing protocol uses the Bellman-Ford algorithm to calculate shortest paths based on hop count?", "RIP (Routing Information Protocol)", "OSPF", "BGP", "EIGRP"],
      ["What is the maximum payload size of a standard Ethernet Frame MTU (Maximum Transmission Unit)?", "1500 bytes", "512 bytes", "64 KB", "9000 bytes"],
      ["Which utility sends ICMP Echo Request packets to test network reachability to a host?", "ping", "traceroute", "netstat", "nslookup"],
      ["What is the IP address 127.0.0.1 commonly referred to as?", "Loopback / Localhost Address", "Default Gateway", "Broadcast Address", "Multicast Address"],
      ["What protocol automatically assigns dynamic IP addresses and network configuration settings to host devices?", "DHCP", "DNS", "NAT", "SMTP"],
      ["Which mechanism allows multiple private internal IP addresses to map to a single public IP address for internet access?", "NAT (Network Address Translation)", "CIDR", "VLAN", "Proxying"],
      ["What is the size of an IPv6 address?", "128 bits", "32 bits", "64 bits", "256 bits"],
      ["Which transport layer mechanism prevents a sender from overwhelming a receiver with too much data?", "Sliding Window Flow Control", "Congestion Avoidance", "Checksumming", "Three-Way Handshake"],
      ["What topology connects all network nodes to a single central hub or switch?", "Star Topology", "Mesh Topology", "Bus Topology", "Ring Topology"],
      ["Which protocol is used by email clients to retrieve messages from a mail server while keeping emails synchronized across devices?", "IMAP", "POP3", "SMTP", "HTTP"],
      ["What is a Denial of Service (DoS) attack?", "Flooding a network target with traffic to exhaust its resources and render it unavailable to legitimate users", "Intercepting encrypted data packets", "Modifying local DNS records", "Injecting malicious SQL into forms"]
    ]
  },
  {
    icon: "📊",
    title: "Data Structures & Algorithms",
    desc: "Complexity analysis, searching, sorting, trees, graphs, dynamic programming, and greedy algorithms.",
    level: "Advanced",
    time: "20 min",
    questions: [
      ["What is the worst-case time complexity of Quick Sort?", "O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
      ["Which graph traversal algorithm uses a First-In, First-Out (FIFO) Queue queue implementation?", "Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Algorithm", "Bellman-Ford"],
      ["Which data structure is ideal for evaluating postfix (Reverse Polish) mathematical expressions?", "Stack", "Queue", "Binary Tree", "Heap"],
      ["What is the height of a balanced Binary Search Tree containing 'n' nodes?", "O(log n)", "O(n)", "O(1)", "O(n log n)"],
      ["Which algorithm finds the Minimum Spanning Tree (MST) of a connected edge-weighted graph using a greedy approach with a disjoint set (Union-Find)?", "Kruskal's Algorithm", "Prim's Algorithm", "Dijkstra's Algorithm", "Floyd-Warshall"],
      ["What key property differentiates Dynamic Programming from Divide and Conquer?", "Dynamic Programming solves overlapping subproblems by storing previously computed sub-results", "Dynamic Programming does not use recursion", "Divide and Conquer requires sorted input", "Dynamic Programming has O(1) space complexity"],
      ["In a Max-Heap array representation, for an element at index `i` (0-indexed), where is its left child located?", "2*i + 1", "2*i", "2*i + 2", "i / 2"],
      ["What is the average time complexity to insert an element into an open-addressing Hash Table?", "O(1)", "O(log n)", "O(n)", "O(n^2)"],
      ["Which sorting algorithm is stable, in-place, and has a worst-case performance of O(n^2)?", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
      ["What is the time complexity of the Floyd-Warshall all-pairs shortest path algorithm?", "O(V^3)", "O(V^2)", "O(V * E)", "O(E log V)"],
      ["Which tree structure self-balances using tree rotations whenever node heights differ by more than 1?", "AVL Tree", "B-Tree", "Binary Search Tree", "Trie"],
      ["What is a Trie data structure primarily used for?", "Fast prefix-based string searching and autocomplete systems", "Graph shortest path calculations", "Priority queue storage", "Storing relational rows"],
      ["Which problem-solving strategy makes the locally optimal choice at each step hoping to find a global optimum?", "Greedy Algorithm", "Dynamic Programming", "Backtracking", "Brute Force"],
      ["What is the auxiliary space complexity of Merge Sort?", "O(n)", "O(1)", "O(log n)", "O(n^2)"],
      ["Which asymptotic notation describes an absolute tight bound (both upper and lower bound) of an algorithm performance?", "Theta Notation (Θ)", "Big O Notation (O)", "Big Omega Notation (Ω)", "Little o Notation"],
      ["In a directed acyclic graph (DAG), what is topological sorting?", "A linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v", "Sorting vertices by in-degree counts", "Finding the longest path through vertices", "Determining connected graph components"],
      ["What collision resolution technique uses linked list chains at each hash bucket?", "Separate Chaining", "Linear Probing", "Quadratic Probing", "Double Hashing"],
      ["What is the time complexity of searching for an element in an un-sorted Linked List of length `n`?", "O(n)", "O(log n)", "O(1)", "O(n log n)"],
      ["Which algorithm solves the Single Source Shortest Path problem on graphs with negative edge weights?", "Bellman-Ford Algorithm", "Dijkstra's Algorithm", "A* Search", "Prim's Algorithm"],
      ["What is the worst-case space complexity of Depth-First Search (DFS) on a tree of maximum depth `h`?", "O(h)", "O(n^2)", "O(1)", "O(n log n)"]
    ]
  }
];


/* =====================================================
   DOM ELEMENTS & INITIAL SETUP
====================================================== */
const authPage = document.getElementById("authPage");
const onboardingPage = document.getElementById("onboardingPage");
const app = document.getElementById("app");

let currentEmail = "Guest";
let currentUserName = "Developer";

/* =====================================================
   PASSWORD TOGGLE & SOCIAL UTILS
====================================================== */
function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);
  const icon = button.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    button.setAttribute("aria-label", "Hide password");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    button.setAttribute("aria-label", "Show password");
  }
}

document.querySelectorAll(".password-toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    togglePassword(this.dataset.target, this);
  });
});

document.querySelector(".forgot")?.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Password reset link will be sent to your email.");
});

document.querySelectorAll(".social-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const provider = this.dataset.provider || "Social";
    alert(provider + " authentication successful!");
    startOnboarding("user@gmail.com", "User");
  });
});

/* =====================================================
   AUTHENTICATION FORM HANDLERS
====================================================== */
/* =====================================================
   AUTHENTICATION FORM HANDLERS (WITH ACCOUNT VALIDATION)
====================================================== */

// Helper to retrieve registered accounts array
function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem("quizMentorUsers") || "[]");
}

// 1. REGISTER FORM HANDLER
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;

  const users = getRegisteredUsers();

  // Check if account already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    alert("An account with this email already exists. Please login instead.");
    return;
  }

  // Save new user account
  users.push({ name, email, password });
  localStorage.setItem("quizMentorUsers", JSON.stringify(users));

  alert("Account created successfully! Proceeding to onboarding.");
  startOnboarding(email, name);
});

// 2. LOGIN FORM HANDLER
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const users = getRegisteredUsers();

  // Find existing account match
  const user = users.find(u => u.email === email);

  if (!user) {
    alert("No account found with this email. Please create an account first!");
    return;
  }

  if (user.password !== password) {
    alert("Incorrect password. Please try again.");
    return;
  }

  // Login successful
  startOnboarding(user.email, user.name);
});

function startOnboarding(email, name) {
  currentEmail = email;
  currentUserName = name;
  document.getElementById("avatar").textContent = name.charAt(0).toUpperCase();

  authPage.classList.add("hidden");
  onboardingPage.classList.remove("hidden");
  goProfileStep(1);
}

/* =====================================================
   ONBOARDING STEPPER
====================================================== */
let profileStep = 1;
function goProfileStep(step) {
  profileStep = step;
  document.querySelectorAll(".profile-step").forEach(s => s.classList.toggle("active", +s.dataset.step === step));
  document.getElementById("profileStepLabel").textContent = `STEP ${step} OF 3`;
  document.getElementById("profileProgress").style.width = `${(step / 3) * 100}%`;
  document.getElementById("profileBack").style.visibility = step === 1 ? "hidden" : "visible";
  document.getElementById("profileNext").textContent = step === 3 ? "Build my dashboard →" : "Continue →";
  if (step === 3) updateProfileSummary();
}

function updateProfileSummary() {
  const interests = [...document.querySelectorAll('input[name="interest"]:checked')].map(x => x.parentElement.querySelector(".choice-title").textContent.trim());
  const level = document.querySelector('input[name="class"]:checked')?.parentElement.querySelector(".choice-title").textContent.trim();
  const types = [...document.querySelectorAll('input[name="qtype"]:checked')].map(x => x.parentElement.querySelector(".choice-title").textContent.trim());
  document.getElementById("profileSummary").innerHTML =
    `<b>Almost ready, ${currentUserName}!</b> ${interests.length ? `You chose ${interests.length} interest${interests.length > 1 ? "s" : ""}.` : " You can still continue without selecting an interest."}
     ${level ? ` Study level: ${level}.` : ""} ${types.length ? ` Question styles: ${types.join(", ")}.` : ""}`;
}

function finishProfile() {
  const profile = {
    name: currentUserName,
    email: currentEmail,
    interests: [...document.querySelectorAll('input[name="interest"]:checked')].map(x => x.value),
    classLevel: document.querySelector('input[name="class"]:checked')?.value || "other",
    questionTypes: [...document.querySelectorAll('input[name="qtype"]:checked')].map(x => x.value)
  };
  localStorage.setItem("quizMentorProfile", JSON.stringify(profile));
  onboardingPage.classList.add("hidden");
  app.classList.remove("hidden");
  applyPersonalization(profile);
}

document.getElementById("profileNext")?.addEventListener("click", () => {
  if (profileStep < 3) goProfileStep(profileStep + 1);
  else finishProfile();
});

document.getElementById("profileBack")?.addEventListener("click", () => {
  if (profileStep > 1) goProfileStep(profileStep - 1);
});

function applyPersonalization(profile) {
  const map = {
    web: ["HTML Fundamentals", "CSS Essentials", "Accessibility"],
    frontend: ["CSS Essentials", "Flexbox & Grid", "Accessibility"],
    javascript: ["JavaScript Core"],
    react: ["React Basics"],
    apis: ["Web APIs"],
    tools: ["Git & Dev Tools"]
  };
  const wanted = [...new Set(profile.interests.flatMap(x => map[x] || []))];
  const badge = document.getElementById("personalBadge");
  badge.style.display = "block";
  badge.textContent = wanted.length ? `✨ Personalized for ${profile.classLevel === "college" ? "college-level" : profile.classLevel === "other" ? "self-learning" : `Class ${profile.classLevel}`} • ${wanted.length} recommended topics` : "✨ Your personalized learning dashboard";
  if (wanted.length) {
    const sorted = [...topics].sort((a, b) => (wanted.includes(b.title) ? 1 : 0) - (wanted.includes(a.title) ? 1 : 0));
    render("", sorted);
  } else render();
}

document.getElementById("editProfile")?.addEventListener("click", () => {
  const p = JSON.parse(localStorage.getItem("quizMentorProfile") || "null");
  if (p) {
    document.querySelectorAll('input[name="interest"]').forEach(x => x.checked = p.interests.includes(x.value));
    document.querySelectorAll('input[name="qtype"]').forEach(x => x.checked = p.questionTypes.includes(x.value));
    const cls = document.querySelector(`input[name="class"][value="${p.classLevel}"]`);
    if (cls) cls.checked = true;
  }
  app.classList.add("hidden");
  onboardingPage.classList.remove("hidden");
  goProfileStep(1);
});

/* =====================================================
   PROGRESS & HISTORY TRACKING ENGINE
====================================================== */
function getQuizLogs() {
  return JSON.parse(localStorage.getItem("quizMentorLogs") || "[]");
}

function saveQuizAttempt(topicTitle, score, total, accuracy, durationSec) {
  const logs = getQuizLogs();
  const newAttempt = {
    id: Date.now(),
    topic: topicTitle,
    score: score,
    total: total,
    accuracy: accuracy,
    duration: durationSec,
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
  };
  logs.unshift(newAttempt);
  localStorage.setItem("quizMentorLogs", JSON.stringify(logs));
  renderAnalytics();
}

function renderAnalytics() {
  const logs = getQuizLogs();
  const totalCompleted = logs.length;
  const totalQuestions = logs.reduce((acc, curr) => acc + curr.total, 0);
  const totalCorrect = logs.reduce((acc, curr) => acc + curr.score, 0);
  const avgAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  let improvementText = "0%";
  if (logs.length >= 2) {
    const recentAccuracy = logs.slice(0, 3).reduce((a, b) => a + b.accuracy, 0) / Math.min(logs.length, 3);
    const olderAccuracy = logs.slice(3).length > 0
      ? logs.slice(3).reduce((a, b) => a + b.accuracy, 0) / logs.slice(3).length
      : logs[logs.length - 1].accuracy;

    const diff = Math.round(recentAccuracy - olderAccuracy);
    improvementText = diff >= 0 ? `+${diff}%` : `${diff}%`;
  }

  let mastery = "Beginner";
  if (totalCompleted >= 5 && avgAccuracy >= 85) mastery = "Master 🚀";
  else if (totalCompleted >= 3 && avgAccuracy >= 70) mastery = "Intermediate ⚡";
  else if (totalCompleted > 0) mastery = "Learner 🌱";

  document.getElementById("completed").textContent = totalCompleted;
  document.getElementById("totalQuestionsSolved").textContent = totalQuestions;
  document.getElementById("overallAccuracy").textContent = `${avgAccuracy}%`;
  document.getElementById("statQuestions").textContent = totalQuestions;
  document.getElementById("improvementBadge").textContent = improvementText;
  document.getElementById("masteryStatus").textContent = mastery;

  const container = document.getElementById("historyTableContainer");
  if (!logs.length) {
    container.innerHTML = '<div class="noresults">No quizzes taken yet. Complete your first quiz to see history logs!</div>';
    return;
  }

  container.innerHTML = `
    <div class="history-list">
      ${logs.map(log => `
        <div class="history-item">
          <div>
            <strong>${log.topic}</strong>
            <span class="history-date">${log.date} • ⏱ ${formatTime(log.duration)}</span>
          </div>
          <div class="history-score-badge ${log.accuracy >= 75 ? 'high' : log.accuracy >= 50 ? 'med' : 'low'}">
            ${log.score}/${log.total} (${log.accuracy}%)
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

document.getElementById("clearHistoryBtn")?.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear your quiz history and progress?")) {
    localStorage.removeItem("quizMentorLogs");
    renderAnalytics();
  }
});

/* =====================================================
   TOPIC RENDER & SEARCH
====================================================== */
const grid = document.getElementById("grid"), search = document.getElementById("search");
function render(filter = "", source = topics) {
  if (!grid) return;
  grid.innerHTML = "";
  const list = source.filter(t => (t.title + " " + t.desc + " " + t.level).toLowerCase().includes(filter.toLowerCase()));
  if (!list.length) {
    grid.innerHTML = '<div class="noresults">No topics found. Try another keyword.</div>';
    return;
  }
  list.forEach(t => {
    const c = document.createElement("article");
    c.className = "card-topic";
    c.innerHTML = `<div class="icon">${t.icon}</div><h3>${t.title}</h3><p>${t.desc}</p><div class="meta"><span class="tag">${t.level}</span><span class="tag">⏱ ${t.time}</span><span class="tag">${t.questions.length} Qs</span></div><button class="start">Start quiz →</button>`;
    c.querySelector(".start").onclick = () => startQuiz(t);
    grid.appendChild(c);
  });
}
search?.addEventListener("input", e => render(e.target.value));
render();

/* =====================================================
   QUIZ ENGINE
====================================================== */
const modal = document.getElementById("quizModal"), body = document.getElementById("quizBody"), bar = document.getElementById("bar");
let current = null, index = 0, score = 0, quizStart = 0, questionStart = 0, elapsed = 0, timerId = null, answerLog = [];
function formatTime(sec) { sec = Math.max(0, Math.floor(sec)); const m = Math.floor(sec / 60), s = sec % 60; return `${m}m ${String(s).padStart(2, "0")}s`; }

function startQuiz(topic) {
  current = { ...topic };
  index = 0; score = 0; answerLog = []; elapsed = 0;
  clearInterval(timerId);

  quizStart = Date.now(); questionStart = Date.now();
  timerId = setInterval(() => {
    elapsed = Math.floor((Date.now() - quizStart) / 1000);
    const t = document.getElementById("quizTimer");
    if (t) t.textContent = `⏱ ${formatTime(elapsed)}`;
  }, 250);

  document.getElementById("quizTitle").textContent = topic.title;
  document.getElementById("quizCategory").textContent = topic.level.toUpperCase();
  modal.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  questionStart = Date.now();
  const q = current.questions[index];
  bar.style.width = `${(index / current.questions.length) * 100}%`;

  let answers = q.slice(1).map((text, i) => ({ text, isCorrect: i === 0 }));
  answers = answers.sort(() => Math.random() - 0.5);

  body.innerHTML = `
    <div class="quiz-top">
      <span id="quizTimer">⏱ ${formatTime(elapsed)}</span>
      <span>Question ${index + 1} of ${current.questions.length}</span>
    </div>
    <div class="q">${index + 1}. ${q[0]}</div>
    <div class="answers">
      ${answers.map((a) => `<button class="answer" data-correct="${a.isCorrect}">${a.text}</button>`).join("")}
    </div>
  `;

  body.querySelectorAll(".answer").forEach((b) => {
    b.onclick = () => processAnswer(b, q);
  });
  body.scrollTop = 0;
}

function processAnswer(clickedBtn, qTextArray) {
  const buttons = [...body.querySelectorAll(".answer")];
  const isCorrect = clickedBtn.dataset.correct === "true";

  answerLog.push({
    question: qTextArray[0],
    selected: clickedBtn.textContent,
    correct: qTextArray[1],
    isCorrect: isCorrect,
    time: Math.max(1, Math.round((Date.now() - questionStart) / 1000))
  });

  buttons.forEach((b) => {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
    else if (b === clickedBtn) b.classList.add("wrong");
  });

  if (isCorrect) score++;

  setTimeout(() => {
    index++;
    if (index < current.questions.length) showQuestion();
    else finish();
  }, 800);
}

function finish() {
  clearInterval(timerId);
  elapsed = Math.floor((Date.now() - quizStart) / 1000);
  bar.style.width = "100%";

  const total = current.questions.length;
  const accuracy = Math.round((score / total) * 100);
  const wrong = total - score;
  const avg = Math.round(elapsed / total);

  const message = accuracy === 100 ? "Perfect score! 🎉" : accuracy >= 75 ? "Excellent work! 🚀" : accuracy >= 50 ? "Good progress! Keep going. 💡" : "Keep practicing — you’re building the skill. 💪";

  const breakdown = answerLog.map((x, n) => {
    return `
      <div class="review-row ${x.isCorrect ? "is-correct" : "is-wrong"}">
        <div>
          <b>${n + 1}. ${x.isCorrect ? "Correct" : "Needs review"}</b>
          <span>${x.question}</span>
        </div>
        <div>
          ${x.isCorrect ? "✓" : "✕"} 
          <small>${x.isCorrect ? x.correct : `Your answer: ${x.selected}<br>Correct:${x.correct}`}</small>
        </div>
      </div>
    `;
  }).join("");

  body.innerHTML = `
    <div class="result">
      <div class="result-hero">
        <div class="result-label">QUIZ COMPLETE</div>
        <div class="score">${score}/${total}</div>
        <h2>${message}</h2>
        <p>Here’s your performance breakdown for ${current.title}.</p>
      </div>
      <div class="result-grid">
        <div class="result-stat"><strong>${accuracy}%</strong><span>Accuracy</span></div>
        <div class="result-stat"><strong>${formatTime(elapsed)}</strong><span>Time taken</span></div>
        <div class="result-stat"><strong>${formatTime(avg)}</strong><span>Avg. / question</span></div>
        <div class="result-stat"><strong>${wrong}</strong><span>To review</span></div>
      </div>
      <div class="meter">
        <div class="meter-head"><b>Accuracy meter</b><b>${accuracy}%</b></div>
        <div class="meter-track"><i style="width:${accuracy}%"></i></div>
      </div>
      <div class="insight">
        <b>🧠 Result analyser</b>
        <p>${accuracy >= 75
      ? `You have a strong grasp of ${current.title}. Review any missed questions below.`
      : `Focus on the ${wrong} missed${wrong === 1 ? "question" : "questions"} below to strengthen your understanding.`}</p>
      </div>
      <div class="review">
        <div class="review-title">
          <b>Question-by-question review</b>
          <span>${score} correct • ${wrong} to review</span>
        </div>
        ${breakdown}
      </div>
      <div class="result-actions">
        <button class="btn" id="retakeQuizBtn">↻ Retake quiz</button>
        <button class="btn secondary" id="backToTopicsBtn">Back to topics</button>
      </div>
    </div>
  `;

  document.getElementById("retakeQuizBtn")?.addEventListener("click", () => startQuiz(current));
  document.getElementById("backToTopicsBtn")?.addEventListener("click", () => modal.classList.add("hidden"));

  body.scrollTop = 0;
  saveQuizAttempt(current.title, score, total, accuracy, elapsed);
}

document.getElementById("close")?.addEventListener("click", () => modal.classList.add("hidden"));
modal?.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });
document.getElementById("randomBtn")?.addEventListener("click", () => startQuiz(topics[Math.floor(Math.random() * topics.length)]));

document.addEventListener("DOMContentLoaded", renderAnalytics);

