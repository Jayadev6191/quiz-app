const data = [
  {
    question: "Is lion the king of the jungle ?",
    info_redirect_url: "https://google.com",
    option_type: "text",
    options: ["yes", "no"],
    answer_format: "single",
    correct_choices: [0],
  },
  {
    question: "What is the correct answer for question 1 ?",
    info_redirect_url: "https://yahoo.com",
    question_code_block:
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    option_type: "code_blocks",
    options: [
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, Hello!" << std::endl;\n    return 0;\n}',
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, People!" << std::endl;\n    return 0;\n}',
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello, Robots!" << std::endl;\n    return 0;\n}',
    ],
    language: "C++",
    answer_format: "multi",
    correct_choices: [0, 1, 2, 3],
  },
  {
    question: "What is the correct answer for sum of 2 number ?",
    option_type: "code_blocks",
    options: [
      '#include <iostream>\n\nint main() {\n    int a = 5;\n    int b = 7;\n    int sum = a + b;\n    std::cout << "The sum of " << a << " and " << b << " is " << sum << std::endl;\n    return 0;\n}',
      '#include <iostream>\n\nint main() {\n    int a = 5;\n    int b = 7;\n    int sum = a - b;\n    std::cout << "The sum of " << a << " and " << b << " is " << sum << std::endl;\n    return 0;\n}',
      '#include <iostream>\n\nint main() {\n    int a = 5;\n    int b = 7;\n    int sum = a % b;\n    std::cout << "The sum of " << a << " and " << b << " is " << sum << std::endl;\n    return 0;\n}',
      '#include <iostream>\n\nint main() {\n    int a = 5;\n    int b = 7;\n    int sum = a * b;\n    std::cout << "The sum of " << a << " and " << b << " is " << sum << std::endl;\n    return 0;\n}',
    ],
    language: "C++",
    answer_format: "single",
    correct_choices: [0],
  },
];

module.exports = { data };
