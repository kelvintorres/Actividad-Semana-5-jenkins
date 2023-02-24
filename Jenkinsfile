pipeline {
  agent any
  stages {
    stage('jenkins') {
      steps {
        sh '''pipeline {
    agent any

    stages {
        stage(\'Install Docker\') {
            steps {
                sh \'curl -fsSL https://get.docker.com/ -o get-docker.sh\'
                sh \'sudo sh get-docker.sh\'
                sh \'sudo usermod -aG docker jenkins\'
            }
        }

        stage(\'Build and Run Docker Compose\') {
            steps {
                sh \'docker-compose up -d\'
            }
        }
    }
}'''
        }
      }

    }
  }