pipeline {
  agent any
  stages {
    stage('') {
      steps {
        sh ''' pipeline {
  agent any
  
  stages {
    stage(\'Checkout\') {
      steps {
        checkout scm
      }
    }
    
    stage(\'Build and Deploy\') {
      environment {
        DOCKER_COMPOSE_VERSION = \'1.29.2\'
      }
      
      steps {
        sh "docker-compose --version"
        sh "docker-compose up -d"
      }
    }
  }
}'''
        }
      }

    }
  }