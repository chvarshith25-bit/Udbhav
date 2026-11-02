export const categories = [
  { id: 'sports', label: 'Sports', number: '01', heading: 'Play for the moment.', intro: 'The rush. The rivalry. The last point. Bring your game and leave it all on the field.', cue: 'FIND YOUR COMPETITIVE EDGE', art: 'sports' },
  { id: 'cultural', label: 'Cultural', number: '02', heading: 'Take the spotlight.', intro: 'For the voices, the moves, the stories and the players. Find your stage, and make it yours.', cue: 'LET YOUR EXPRESSION TAKE OVER', art: 'cultural' },
  { id: 'technical', label: 'Technical', number: '03', heading: 'Build what’s next.', intro: 'Big questions. Bold ideas. Make something that moves the conversation forward.', cue: 'TURN CURIOSITY INTO POSSIBILITY', art: 'technical' },
];
const groups = {
  sports: ['Basketball', 'Football', 'Volleyball', 'Table Tennis', 'Cricket', 'Badminton', 'Chess', 'Carroms', 'Kabaddi'],
  cultural: ['Battle of Bands', 'Classical Dance', 'Singing Competition', 'Dancing Competition', 'Treasure Hunt', 'Squid Game', 'Photography Competition', 'Videography Competition', 'Short Film Competition', 'BGMI', 'Free Fire', 'Valorant Tournament', 'IPL Auction'],
  technical: ['Codeathon', 'Ideathon', 'Branch-wise Hackathons', 'Project Expo'],
};
const descriptions = {
  'Basketball': 'Bring your court vision, team spirit and best game to the basketball competition.',
  'Football': 'Connect every pass and make every chance count in the football competition.',
  'Volleyball': 'Serve, set and rise together in the volleyball competition.',
  'Table Tennis': 'Quick reactions meet precise placement at the table.',
  'Cricket': 'Step up with bat, ball and a team ready to compete.',
  'Badminton': 'Put your footwork, speed and precision to the test.',
  'Chess': 'Think ahead, find your move and test your strategy across the board.',
  'Carroms': 'Bring a steady hand and a sharp eye to the carrom board.',
  'Kabaddi': 'A contest of agility, strength and team coordination.',
  'Battle of Bands': 'Turn up with your sound and bring the stage to life.',
  'Classical Dance': 'Celebrate rhythm, expression and the art of classical dance.',
  'Singing Competition': 'Find your voice and share your sound.',
  'Dancing Competition': 'Make your move in Freestyle, Techno or Mass.',
  'Treasure Hunt': 'Follow your curiosity, connect the clues and enjoy the chase.',
  'Squid Game': 'A festival activity inspired by the game format. Rules and participation details coming soon.',
  'Photography Competition': 'Find a new perspective and tell a story in a single frame.',
  'Videography Competition': 'Bring your perspective to life through moving images.',
  'Short Film Competition': 'Tell a story that stays with the audience beyond the final frame.',
  'BGMI': 'Squad up for the BGMI competition. Format and rules coming soon.',
  'Free Fire': 'Bring your squad and strategy to the Free Fire competition.',
  'Valorant Tournament': 'Put your teamwork and tactical thinking into play.',
  'IPL Auction': 'Build your strategy in an IPL-inspired auction activity.',
  'Codeathon': 'Translate a challenge into code and put your problem-solving skills to work.',
  'Ideathon': 'Explore a challenge and shape an idea with potential.',
  'Branch-wise Hackathons': 'Collaborate on ideas through branch-wise hackathons. Tracks coming soon.',
  'Project Expo': 'Share the thinking, making and experimentation behind your project.',
};
export const events = Object.entries(groups).flatMap(([category, titles]) => titles.map(title => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'), title, category,
  subgroup: ['BGMI','Free Fire','Valorant Tournament','IPL Auction'].includes(title) ? 'Gaming & strategy' : category === 'cultural' ? 'Arts & activities' : null,
  description: descriptions[title], images: [], venue: null, date: null, startTime: null, endTime: null,
  coordinators: [{ name: null, phone: null }, { name: null, phone: null }],
  registrationWhatsapp: null, contactPhone: null, contactEmail: null, status: 'details-coming-soon',
})));
export const festival = { title: 'UDHBHAV 2K27', institution: 'Vidya Jyothi Institute of Technology', location: 'Hyderabad', dates: ['2027-01-28', '2027-01-29', '2027-01-30'], annualDay: '2027-01-30', schedule: [] };
