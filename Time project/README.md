# Login-Signup System

A Django-based authentication system with a modern UI and MySQL database.

## Setup Instructions

1. Create a virtual environment:
```bash
python -m venv venv
source venv/Scripts/activate  # On Windows
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Configure MySQL database:
- Create a MySQL database named `login_system`
- Update the database credentials in `.env` file

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Start the development server:
```bash
python manage.py runserver
```

Visit http://127.0.0.1:8000 to see the application. 