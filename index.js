const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  copyOfDriver = {...driver}
  copyOfDriver.key = value;
  return copyOfDriver;
}

