pipeline {
  agent any
  stages {
    stage('jenkins') {
      steps {
        sh 'docker compose up -d --build'
        sh 'ls' 
      }
    }

  }
}