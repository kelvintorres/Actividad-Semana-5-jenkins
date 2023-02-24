pipeline {
  agent any
  stages {
    stage('jenkins') {
      steps {
        sh 'sh \'docker compose up -d --build\''
      }
    }

  }
}