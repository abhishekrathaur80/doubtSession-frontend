# doubtSession-frontend
DoubtSession( Real-Time Doubt Solving Platform)

Backend: https://github.com/abhishekrathaur80/doubtSession-backend 

Introduction:
DoubtShare is an interactive real-time doubt solving platform designed to assist students with their academic queries. 

Product Features
User Types Students:

Attributes: Class grade, language. Actions: Create doubt requests. Tutors:

Attributes: Doubt subject expertise, class grade, language. Actions: Accept student doubt requests.

Specifies doubt subject, class grade, and language. System finds online tutors matching criteria. Real-Time Notification:

Eligible tutors are notified in real-time.

Tracks real-time tutor availability.

Updates the last ping time against each tutor in the “Tutor Availability” table every 3 seconds. 
CRON Job:Runs every second to count the real-time available tutors.
