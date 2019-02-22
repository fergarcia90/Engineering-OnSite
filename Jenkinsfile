pipeline {
  agent {
    docker { image 'node:8-alpine'}
  }

  stages {
    stage('Test') {
      steps {
        checkout scm
        dir("./devops/challenge/user/") {
          sh "npm install"
          sh "npm run test"
          sh "npm run lint"
        }
      }
    }
  }
}
