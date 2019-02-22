pipeline {
  agent none

  stages {
    stage('Test') {
      agent { docker 'node:8-alpine'}
      steps {
        checkout scm
        dir("./devops/challenge/user/") {
          sh "npm install"
          sh "npm run test"
          sh "npm run lint"
        }
        dir("./devops/challenge/vehicle/") {
          sh "npm install"
          sh "npm run test"
          sh "npm run lint"
        }
      }
    }
    stage('Publish images') {
      when {
        branch 'master'
      }
      agent any
      steps {
        checkout scm
        dir("./devops/challenge/user/"){
          sh "docker image build -t garciacfer/onsite-devops-user:latest ."
          withDockerRegistry([credentialsId: "39ca033e-a04f-44f9-8d26-5ac8546d5a58", url: ""]) {
              sh "docker image push garciacfer/onsite-devops-user:latest"
          }
        }
        dir("./devops/challenge/vehicle/"){
          sh "docker image build -t garciacfer/onsite-devops-vehicle:latest ."
          withDockerRegistry([credentialsId: "39ca033e-a04f-44f9-8d26-5ac8546d5a58", url: ""]) {
              sh "docker image push garciacfer/onsite-devops-vehicle:latest"
          }
        }
      }
    }
  }
}
