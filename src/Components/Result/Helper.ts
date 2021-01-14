/**
 * Returns correct label based on datakey
 * @param datakey 
 */
export const getCorrectLabelforColumn = (datakey:string)=>{
    switch (datakey) {
      case 'firstName':
        return "First Name"
      case "lastName":
        return "Last Name"
      case "phoneNumber":
        return "Phone Number"
      case "email":
        return 'Email';
      case "developerType":
        return "Type of Developer"
      case "educationLevel":
        return "Education Level"
        case "fiveYearGoals":
          return "Five Year Goals"
        case "relocationStatus":
          return "Relocation Status"
        case "resume":
            return "resume"
      default:
        break;
    }
  }
