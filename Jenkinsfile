pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh ''' pipeline {
  agent any
  
  stages {
    stage(\'Build\') {
      steps {
        // Clonar el repositorio de Git (puedes personalizarlo según tus necesidades)
        git \'https://github.com/kelvintorres/Actividad-Semana-5-jenkins.git\'
        
        // Ejecutar el archivo de docker-compose
        sh \'docker-compose up -d\'
      }
    }
  }
}
'''
        }
      }

    }
  }