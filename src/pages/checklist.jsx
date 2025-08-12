import { useState, useEffect } from "react";

const initialTasks = [
  // Pre-Arrival
  { id: 1, category: "Pre-Arrival", text: "Apply for student visa and schedule visa interview", completed: false },
  { id: 2, category: "Pre-Arrival", text: "Receive I-20 or DS-2019 form from university", completed: false },
  { id: 3, category: "Pre-Arrival", text: "Pay SEVIS fee", completed: false },
  { id: 4, category: "Pre-Arrival", text: "Book flight tickets", completed: false },
  { id: 5, category: "Pre-Arrival", text: "Arrange airport pickup or transportation to campus", completed: false },
  { id: 6, category: "Pre-Arrival", text: "Purchase health insurance (if required)", completed: false },
  { id: 7, category: "Pre-Arrival", text: "Arrange accommodation (on-campus or off-campus)", completed: false },
  { id: 8, category: "Pre-Arrival", text: "Research local culture and laws", completed: false },
  { id: 9, category: "Pre-Arrival", text: "Make copies of important documents (passport, visa, I-20, acceptance letter)", completed: false },

  // Arrival & Orientation
  { id: 10, category: "Arrival & Orientation", text: "Attend international student orientation", completed: false },
  { id: 11, category: "Arrival & Orientation", text: "Register for classes", completed: false },
  { id: 12, category: "Arrival & Orientation", text: "Get student ID card", completed: false },
  { id: 13, category: "Arrival & Orientation", text: "Open a local bank account", completed: false },
  { id: 14, category: "Arrival & Orientation", text: "Activate phone plan (SIM card or contract)", completed: false },
  { id: 15, category: "Arrival & Orientation", text: "Set up email and student accounts", completed: false },
  { id: 16, category: "Arrival & Orientation", text: "Buy essential items (bedding, kitchen supplies, etc.)", completed: false },
  { id: 17, category: "Arrival & Orientation", text: "Meet academic advisor", completed: false },

  // Academic
  { id: 18, category: "Academic", text: "Purchase textbooks and supplies", completed: false },
  { id: 19, category: "Academic", text: "Learn campus resources (library, tutoring, labs)", completed: false },
  { id: 20, category: "Academic", text: "Understand academic calendar and deadlines", completed: false },
  { id: 21, category: "Academic", text: "Know how to drop/add classes", completed: false },
  { id: 22, category: "Academic", text: "Familiarize with online learning platforms (Canvas, Blackboard)", completed: false },
  { id: 23, category: "Academic", text: "Attend classes regularly and participate", completed: false },
  { id: 24, category: "Academic", text: "Understand plagiarism and academic integrity policies", completed: false },

  // Legal & Documentation
  { id: 25, category: "Legal & Documentation", text: "Keep passport and visa valid (track expiration dates)", completed: false },
  { id: 26, category: "Legal & Documentation", text: "Update address with school and immigration office", completed: false },
  { id: 27, category: "Legal & Documentation", text: "Apply for Social Security Number (if eligible)", completed: false },
  { id: 28, category: "Legal & Documentation", text: "Know rules for on-campus/off-campus work", completed: false },
  { id: 29, category: "Legal & Documentation", text: "Register with the international student office periodically", completed: false },

  // Health & Wellbeing
  { id: 30, category: "Health & Wellbeing", text: "Schedule a health checkup", completed: false },
  { id: 31, category: "Health & Wellbeing", text: "Know where campus health services are", completed: false },
  { id: 32, category: "Health & Wellbeing", text: "Register for health insurance plan", completed: false },
  { id: 33, category: "Health & Wellbeing", text: "Understand mental health resources", completed: false },
  { id: 34, category: "Health & Wellbeing", text: "Find local doctors or clinics near campus", completed: false },

  // Financial
  { id: 35, category: "Financial", text: "Budget monthly expenses", completed: false },
  { id: 36, category: "Financial", text: "Pay tuition and fees on time", completed: false },
  { id: 37, category: "Financial", text: "Know how to pay rent/utilities", completed: false },
  { id: 38, category: "Financial", text: "Understand currency exchange and banking fees", completed: false },
  { id: 39, category: "Financial", text: "Apply for scholarships or financial aid (if applicable)", completed: false },

  // Social & Cultural
  { id: 40, category: "Social & Cultural", text: "Join student clubs and organizations", completed: false },
  { id: 41, category: "Social & Cultural", text: "Attend campus events and workshops", completed: false },
  { id: 42, category: "Social & Cultural", text: "Explore the local community and city", completed: false },
  { id: 43, category: "Social & Cultural", text: "Connect with other international students", completed: false },
  { id: 44, category: "Social & Cultural", text: "Learn about cultural adjustment and homesickness", completed: false },

  // Technology & Communication
  { id: 45, category: "Technology & Communication", text: "Set up reliable internet access", completed: false },
  { id: 46, category: "Technology & Communication", text: "Download essential apps (university, transportation, banking)", completed: false },
  { id: 47, category: "Technology & Communication", text: "Back up important documents digitally", completed: false },
];

export default function Checklist({ selectedUniversity }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = (text, category) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      category,
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");

  const categories = [...new Set(tasks.map(t => t.category))];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">International Student Checklist</h1>

      {selectedUniversity && (
        <h2 className="text-xl font-semibold mb-6">Checklist for {selectedUniversity.name}</h2>
      )}

      {/* New task input */}
      <div className="mb-6 flex space-x-2">
        <input
          type="text"
          placeholder="Add new task"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={newTaskCategory}
          onChange={e => setNewTaskCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          onClick={() => {
            addTask(newTaskText, newTaskCategory || "General");
            setNewTaskText("");
            setNewTaskCategory("");
          }}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Tasks grouped by category */}
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold mb-3">{category}</h3>
          <ul>
            {tasks.filter(t => t.category === category).map(task => (
              <li key={task.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mr-3"
                />
                <span className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="ml-auto text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}