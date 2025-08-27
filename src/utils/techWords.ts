// utils/techWords.ts
export const techWords = [
  // Python ecosystem - expanded
  'print()', 'def main():', 'class Student:', 'import pandas', 'from flask import', '__init__(self)', 'return result', 'if __name__',
  'Flask', 'app.route("/api")', '@decorator', 'render_template()', 'request.json', 'jsonify(data)',
  'Streamlit', 'st.write()', 'st.sidebar', 'st.plotly_chart', 'st.dataframe()', 'st.button()',
  'numpy as np', 'pandas as pd', 'DataFrame.head()', 'np.array([1,2,3])', 'pd.read_csv()', 'data.groupby()',
  'OpenAI', 'GPT-4', 'embeddings', 'vector_search', 'semantic_similarity', 'chatbot.respond()',
  'PostgreSQL', 'SELECT * FROM', 'INSERT INTO', 'UPDATE SET', 'LEFT JOIN', 'WHERE id =', 'ORDER BY',
  'multimodal_ai', 'RAG_system', 'text_chunks', 'retrieval_qa', 'knowledge_base', 'similarity_search()',
  'matplotlib.pyplot', 'plt.show()', 'seaborn', 'sklearn', 'train_test_split', 'model.fit()',
  'requests.get()', 'json.loads()', 'try: except:', 'with open() as f:', 'lambda x:', 'list_comprehension',

  // JavaScript/React ecosystem - expanded
  'function calculate()', 'const getData = async', 'let result = []', 'var username', '=> { return }', 'arrow_functions',
  'React.useState()', 'useEffect(() => {})', 'props.children', 'state.loading', 'JSX.Element', '<Component />',
  'Next.js', 'pages/api/', 'components/ui/', 'getStaticProps()', 'useRouter()', 'Link href=',
  'HTML5', 'WebSocket.connect()', 'real-time_chat', 'socket.io', 'emit("message")', 'addEventListener()',
  'JavaScript', 'async/await', 'Promise.resolve()', 'fetch("/api/data")', 'API.endpoint', '.then().catch()',
  'JSON.parse()', 'JSON.stringify()', 'localStorage.set', 'document.querySelector', 'DOM.manipulation',
  'Tailwind CSS', 'className="flex"', 'responsive_design', 'hover:bg-green', 'md:text-lg', 'lg:grid-cols-3',
  'npm install', 'yarn add', 'package.json', 'node_modules/', 'webpack.config', 'babel.config',
  'map((item) => {})', 'filter(x => x > 0)', 'reduce((a,b) => a+b)', 'spread...operator', 'destructuring',

  // C++ ecosystem - expanded  
  'cout << "Hello"', '#include <iostream>', 'using namespace std', 'int main() {', 'return 0;', 'endl',
  'class Robot {', 'public:', 'private:', 'protected:', 'virtual void', 'override', 'constructor()',
  'std::vector<int>', 'std::string', 'std::map<>', 'auto keyword', 'nullptr', 'smart_pointers',
  'threaded_execution', 'computer_vision', 'robot_simulation', 'fault_injection', 'std::thread',
  'multi-robot_comm', 'socket_communication', 'robustness_testing', 'failure_scenarios',
  'template<class T>', 'typename T', 'const& reference', 'move_semantics', 'RAII_pattern',
  'cv::Mat image', 'OpenCV', 'image.at<>()', 'cv::waitKey()', 'robot.move()', 'sensor.read()',

  // Java ecosystem - NEW
  'public static void', 'main(String[] args)', 'System.out.println()', 'public class Main', 'private int id',
  'ArrayList<String>', 'HashMap<K,V>', 'List<Integer>', 'Set<Object>', 'Collections.sort()', 
  'try { } catch()', 'throws Exception', 'finally { }', 'interface Runnable', 'extends Object',
  'Spring Boot', '@RestController', '@Autowired', '@Entity', '@RequestMapping', 'application.properties',
  'Maven', 'pom.xml', 'gradle.build', 'JUnit', '@Test', 'assertEquals()', 'mockito.mock()',
  'Thread.sleep()', 'synchronized', 'volatile', 'abstract class', 'enum Status', 'instanceof',
  'new Scanner()', 'BufferedReader', 'FileInputStream', 'Properties.load()', 'StringBuilder.append()',

  // Database & Backend - expanded
  'MongoDB', 'db.collection.find()', 'aggregate_pipeline', 'NoSQL_queries', '$match', '$group',
  'Redis', 'cache.get()', 'session_store', 'pub/sub', 'Docker', 'Dockerfile', 'docker-compose.yml',
  'AWS Lambda', 'serverless', 'API Gateway', 'S3.bucket', 'EC2.instance', 'cloud_deployment',
  'GraphQL', 'mutation', 'query', 'resolver', 'schema', 'Apollo_Server', 'REST_vs_GraphQL',
  'microservices', 'load_balancer', 'horizontal_scaling', 'database_indexing', 'caching_strategy',

  // AI/ML terms - expanded
  'machine_learning', 'neural_networks', 'deep_learning', 'model.predict()', 'training_data', 'accuracy_score',
  'tensorflow', 'pytorch', 'scikit-learn', 'model.compile()', 'epochs=100', 'batch_size=32',
  'Gemini_API', 'OpenAI_GPT', 'mood_detection', 'sentiment_analysis', 'emotion_recognition',
  'Spotify_API', 'YouTube_Data', 'music_recommendation', 'collaborative_filtering', 'content_based',
  'feature_engineering', 'cross_validation', 'hyperparameter_tuning', 'overfitting', 'regularization',
  'computer_vision', 'natural_language', 'reinforcement_learning', 'unsupervised_learning',

  // Web development - expanded
  'frontend_dev', 'backend_api', 'full-stack_app', 'responsive_grid', 'mobile-first_design',
  'progressive_web_app', 'service_worker', 'offline_storage', 'push_notifications',
  'client_server', 'deployment_pipeline', 'CI/CD', 'github_actions', 'vercel_deploy',
  'authentication', 'JWT_tokens', 'OAuth2', 'session_cookies', 'password_hashing',
  'CRUD_operations', 'MVC_pattern', 'clean_architecture', 'scalable_design', 'performance_optimization',
  'unit_testing', 'integration_tests', 'end_to_end', 'test_driven_dev', 'code_coverage',

  // Tools and technologies - expanded
  'VS_Code', 'GitHub_repos', 'git_commit', 'pull_request', 'code_review', 'merge_conflicts',
  'Terminal', 'bash_scripts', 'linux_commands', 'ssh_keys', 'environment_variables',
  'CodePath_fellow', 'ASRC_intern', 'CUNY_student', 'technical_resume', 'portfolio_site',
  'problem_solving', 'algorithm_design', 'data_structures', 'time_complexity', 'space_complexity',
  'agile_methodology', 'scrum_master', 'sprint_planning', 'standup_meetings', 'retrospectives',
  'code_optimization', 'debugging_skills', 'performance_profiling', 'memory_management',

  // Fun programming concepts
  'hello_world', 'fizz_buzz', 'recursive_function', 'binary_search', 'quick_sort', 'hash_table',
  'stack_overflow', 'null_pointer', 'segmentation_fault', 'infinite_loop', 'off_by_one',
  'rubber_duck_debug', 'spaghetti_code', 'code_smell', 'refactoring', 'clean_code_principles'
];

export const getRandomWords = (count: number): string[] => {
  const shuffled = [...techWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getWordsForSection = (section: string): string[] => {
  const sectionMappings: { [key: string]: string[] } = {
    about: [
      'print("Samia Islam")', 'const student = "Computer Science"',
      'class SeniorStudent', 'CUNY_graduate', 'AI_enthusiast', 'full_stack_developer'
    ],
    projects: [
      'function showProjects()', 'RAG_System.build()', 'Coffee_Simulator.run()', 
      'YAIN_Music_AI.recommend()', 'RoboSoccer.simulate()', 'return projects_array[]'
    ],
    resume: [
      'const experience = new Map()', 'ASRC_internship', 'CodePath_fellowship', 'MTA_project', 
      'skills: ["Python", "JavaScript", "C++", "Java"]', 'education: CUNY_degree'
    ],
    contact: [
      'console.log("Contact Info")', 'email_address:', 'LinkedIn_profile:', 
      'GitHub_repos:', 'portfolio_site:', 'networking.connect()'
    ]
  };
  
  return sectionMappings[section] || [];
};