# SkillVerse - Interactive Learning Platform

## Setup & Run

1. **Virtual Environment** (already created):
   ```
   venv\\Scripts\\activate.bat
   ```

2. **Install Dependencies** (already done):
   ```
   pip install -r requirements.txt
   ```

3. **Run Development Server**:
   ```
   python app.py
   ```
   Or:
   ```
   set FLASK_APP=app.py
   flask run
   ```

4. **Access**:
   - Home: http://127.0.0.1:5000/
   - Dashboard: http://127.0.0.1:5000/dashboard
   - Playground: http://127.0.0.1:5000/playground (live JS executor)
   - Projects: http://127.0.0.1:5000/projects

## Features
- Responsive glassmorphism UI
- Live code playground (JavaScript)
- Skill progress dashboard
- Project showcase

## Background Images (TODO)
CSS references:
- `static/images/bg1.jpg` (hero)
- `static/images/bg2.jpg` (dashboard)

Download free images (1920x1080 recommended):
- Hero: Abstract gradient/purple-tech background
- Dashboard: Skills/coding workspace theme

Place in `static/images/`.

## TODO
See TODO.md

