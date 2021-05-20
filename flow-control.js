function basicTeenager(age) {
  if (ageChecker(age)) {
    return 'You are a teenager!';
  }
  return 'You are not a teenager';
}

function teenager(age) {
  return basicTeenager(age);
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!';
  }
  return false;
}

function ternaryTeenager(age) {

}

function switchAge(age) {

}
