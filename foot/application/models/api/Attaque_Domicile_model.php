<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Attaque_Domicile_model extends CI_Model {
	
	public function __construct(){
		parent::__construct();
		$this->load->database();
	  }
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function get_statsEquipeAttaqueDomicile()
	{

		$this->db->select("*");
		$this->db->from("statsEquipeAttaqueDomicile");
		$query = $this->db->get();

		return $query->result();
	}

	
}
?>