const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const copyOfDriver = {...driver}
  copyOfDriver[key] = value;
  return copyOfDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key)
