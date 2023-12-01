<?php

require APPPATH.'libraries/REST_Controller.php';

class Attaque_Exterieur extends REST_Controller{

    public function __construct(){
    parent::__construct();
    //load database
    $this->load->database();
    $this->load->model(array("api/Attaque_Exterieur_model"));
    $this->load->library(array("form_validation"));
    $this->load->helper("security");
    }
    // GET: <project_url>/index.php/student
    public function index_get(){
        // list data method
        //echo "This is GET Method";
        // SELECT * from tbl_students;
        $aexterieur = $this->Attaque_Exterieur_model->get_statsEquipeAttaqueExterieur();
        // $students = $this->student_model->get_students();
        //print_r($query->result());

        if(count($aexterieur) > 0){

        $this->response(array(
            "status" => 1,
            "message" => "Attaque Exterieur found",
            "data" => $aexterieur
        ), REST_Controller::HTTP_OK);
        }else{

        $this->response(array(
            "status" => 0,
            "message" => "No Attaque Exterieur found",
            "data" => $aexterieur
        ), REST_Controller::HTTP_NOT_FOUND);
        }
    }
}
?>