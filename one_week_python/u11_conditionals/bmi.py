# BMI EXERCISE

height = float(input("What is your height? (in inches): "))
weight = float(input("What is your weight? (in pounds): "))

bmi = round((weight * 703)/(height * height), 1)

# if bmi < 16.0:
#     print(f"Your BMI of {bmi} makes you SEVERELY UNDERWEIGHT")
# elif bmi < 18.4:
#     print(f"Your BMI of {bmi} makes you UNDERWEIGHT")
# elif bmi < 24.9:
#     print(f"Your BMI of {bmi} makes you NORMAL")
# elif bmi < 29.9:
#     print(f"Your BMI of {bmi} makes you OVERWEIGHT")
# elif bmi < 34.9:
#     print(f"Your BMI of {bmi} makes you MODERATELY OBESE")
# elif bmi < 39.9:
#     print(f"Your BMI of {bmi} makes you SEVERELY OBESE")
# else:
#     print(f"Your BMI of {bmi} makes you MORBIDLY OBESE")

# REFACTOR

if bmi < 16.0:
    category = "SEVERELY UNDERWEIGHT"
elif bmi < 18.4:
    category = "UNDERWEIGHT"
elif bmi < 24.9:
    category = "NORMAL"
elif bmi < 29.9:
    category = "OVERWEIGHT"
elif bmi < 34.9:
    category = "MODERATELY OBESE"
elif bmi < 39.9:
    category = "SEVERELY OBESE"
else:
    category = "MORBIDLY OBESE"

print(f"Your BMI of {bmi} makes you {category}")