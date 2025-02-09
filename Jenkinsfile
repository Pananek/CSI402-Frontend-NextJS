pipeline{
    agent any
    options {
        skipStagesAfterUnstable()
    }
        stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Pananek/CSI402-Frontend-NextJS.git'
            }
        }

        stage('Build') {
            steps {
                sh 'Build'
            }
        }

        stage('Deploy Image') {
            steps {
                sh 'Deploy Image'
            }
        }

        stage('Testing') {
            steps {
                sh 'Testing'
            }
        }
    }
}